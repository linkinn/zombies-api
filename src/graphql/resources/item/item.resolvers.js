const itemResolvers = {
  Query: {
    items: async (parent, { first = 10, offset = 0 }, { db }, info) => {
      try {
        const items = await db.Item.findAll({ limit: first, offset: offset });
        return items;
      } catch (error) {
        return console.log(error);
      }
    },

    item: (parent, { id }, { db }, info) => {
      id = parseInt(id);
      return db.Item.findById(id).then(item => {
        if (!item) {
          throw new Error(`Item with id ${id} not found!`);
        }
        return item;
      });
    }
  }
};

module.exports = itemResolvers;
