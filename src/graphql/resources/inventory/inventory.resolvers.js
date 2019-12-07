const Survivor = require("../../../database/models/Survivor");
const Inventory = require("../../../database/models/Inventory");
const Item = require("../../../database/models/Item");

const inventoryResolvers = {
  Inventory: {
    survivor_id: parent => {
      return Survivor.findByPk(parent.get("survivor_id"));
    },
    item_id: parent => {
      return Item.findByPk(parent.get("item_id"));
    }
  },

  Query: {
    inventories: async (parent, { first = 10, offset = 0 }) => {
      try {
        const inventory = await Inventory.findAll({
          limit: first,
          offset: offset
        });
        return inventory;
      } catch (error) {
        return console.log(error);
      }
    },

    inventory: (parent, { id }) => {
      id = parseInt(id);
      return Inventory.findByPk(id).then(inventory => {
        if (!inventory) throw new Error(`Inventory with id ${id} not found!`);
        return inventory;
      });
    }
  }
};

module.exports = inventoryResolvers;
