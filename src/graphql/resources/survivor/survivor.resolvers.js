const Item = require("../../../database/models/Item");
const Survivor = require("../../../database/models/Survivor");
const Inventory = require("../../../database/models/Inventory");

const survivorResolvers = {
  Survivor: {
    inventory: async parent => {
      const survivor = await Survivor.findByPk(parent.get("id"));
      if (survivor.infected === true) return;

      return Inventory.findAll({ where: { survivor_id: survivor.id } });
    },

    supplement_total: async parent => {
      const result = await Inventory.findAll({
        where: { survivor_id: parent.get("id") }
      });
      const supplementTotal = result.length;
      return supplementTotal;
    },

    points_total: async parent => {
      const resultInventory = await Inventory.findAll({
        where: { survivor_id: parent.get("id") },
        include: [{ model: Item, as: "item" }]
      });
      const pointsTotal = resultInventory
        .map(i => i.amount * i.item.points)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });

      return pointsTotal;
    }
  },

  Query: {
    survivors: async (parent, { first = 10, offset = 0 }) => {
      try {
        const survivors = await Survivor.findAll({
          limit: first,
          offset: offset
        });
        return survivors;
      } catch (error) {
        return console.log(error);
      }
    },

    survivor: async (parent, { id }) => {
      try {
        id = parseInt(id);
        const survivor = await Survivor.findByPk(id);

        if (!survivor) throw new Error(`Survivor with id ${id} not found!`);

        return survivor;
      } catch (error) {
        return console.log(error);
      }
    },

    survivorsNoInfected: async (
      parent,
      { infected = false, first = 10, offset = 0 },
      { db },
      info
    ) => {
      try {
        const survivors = await Survivor.findAll({
          where: { infected },
          limit: first,
          offset: offset
        });
        return survivors;
      } catch (error) {
        return console.log(error);
      }
    }
  },

  Mutation: {
    createSurvivor: async (parent, { input }) => {
      const { name, age, sex, location, inventoryItems } = input;

      try {
        const survivor = await Survivor.create({
          name,
          age,
          sex,
          location
        });

        const promisse = inventoryItems.map(async i => {
          await Inventory.create({
            survivor_id: survivor.id,
            item_id: i.item_id,
            amount: i.amount
          });
        });
        await Promise.all(promisse);

        return survivor;
      } catch (error) {
        return console.log(error);
      }
    },

    updateSurvivor: async (parent, { id, input }) => {
      try {
        id = parseInt(id);
        const { location } = input;

        const survivor = await Survivor.findByPk(id);
        if (!survivor) {
          throw new Error(`Survivor with id ${id} not found!`);
        }

        return survivor.update({ location });
      } catch (error) {
        return console.log(error);
      }
    },

    updateReport: async (parent, { id }) => {
      try {
        id = parseInt(id);
        const survivor = await Survivor.findByPk(id);

        if (!survivor) {
          throw new Error(`Survivor with id ${id} not found!`);
        }

        if (!(survivor.reported < 3)) {
          throw new Error("Survivor already has more than 3 reports!");
        }

        reported = survivor.reported + 1;
        infected = reported === 3 ? true : false;
        acess_inventary = reported === 3 ? false : true;

        console.log(survivor.reported);

        return survivor.update({ reported, infected, acess_inventary });
      } catch (error) {
        return console.log(error);
      }
    }
  }
};

module.exports = survivorResolvers;
