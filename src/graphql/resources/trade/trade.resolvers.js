const Item = require("../../../database/models/Item");
const Survivor = require("../../../database/models/Survivor");
const Inventory = require("../../../database/models/Inventory");
const Trade = require("../../../database/models/Trade");

async function surivorReturn(id) {
  return await Survivor.findOne({
    where: { id: id, infected: false }
  });
}

async function inventoryReturn(id) {
  return await Inventory.findAll({
    where: { survivor_id: id },
    include: [{ model: Item, as: "item" }]
  });
}

function calcPoint(listItems) {
  return listItems
    .map(i => {
      if (i.item) {
        return i.amount * i.item.points;
      }
      return i.amount * i.points;
    })
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
}

const tradeResolvers = {
  Trade: {
    submit_survivor_id: parent => {
      return Survivor.findByPk(parent.get("submit_survivor_id"));
    },
    receive_survivor_id: parent => {
      return Survivor.findByPk(parent.get("receive_survivor_id"));
    },
    item_id: parent => {
      return Item.findByPk(parent.get("item_id"));
    }
  },

  Query: {
    trades: async (parent, { first = 10, offset = 0 }) => {
      try {
        const trades = await Trade.findAll({
          limit: first,
          offset: offset
        });
        return trades;
      } catch (error) {
        return console.log(error);
      }
    }
  },

  Mutation: {
    createTrade: async (parent, { input }) => {
      try {
        const { submit_survivor_id, receive_survivor_id, items } = input;
        const submitSurvivor = await surivorReturn(submit_survivor_id);

        if (!submitSurvivor) {
          throw new Error(`Survivor with id ${id} not found!`);
        }

        const submitInventory = await inventoryReturn(submit_survivor_id);
        const checkSubmitItems = items.map(item => {
          return submitInventory.findIndex(inv => {
            return inv.item_id === item.item_id && inv.amount >= item.amount;
          });
        });

        if (checkSubmitItems.includes(-1)) {
          throw new Error("You do not have the necessary items!");
        }

        let itemsResult = [];

        const promiseItem = items.map(async i => {
          const item = await Item.findOne({
            where: { id: i.item_id },
            attributes: ["id", "points"]
          });
          itemsResult.push(item.dataValues);
        });
        await Promise.all(promiseItem);

        items.map(i => {
          return itemsResult.find((item, index) => {
            if (i.item_id === item.id) {
              return (itemsResult[index] = {
                ...itemsResult[index],
                amount: i.amount
              });
            }
          });
        });

        const receiveSurvivor = await surivorReturn(receive_survivor_id);

        if (!receiveSurvivor) {
          throw new Error(`Survivor with id ${id} not found!`);
        }

        const receiveInventory = await inventoryReturn(receive_survivor_id);
        const pointsTotal = calcPoint(receiveInventory);
        const submitPoints = calcPoint(itemsResult);

        if (submitPoints > pointsTotal) {
          throw new Error("survivor does not have enough points to exchange");
        }

        let trades = [];

        const promiseTrade = itemsResult.map(async i => {
          const result = await Trade.create({
            submit_survivor_id,
            receive_survivor_id,
            item_id: i.id,
            amount: i.amount,
            total_points: i.points * i.amount
          });
          trades.push(result);
        });
        await Promise.all(promiseTrade);

        console.log(trades);

        return trades;
      } catch (error) {
        return console.log(error);
      }
    }
  }
};

module.exports = tradeResolvers;
