"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "inventories",
      [
        {
          survivor_id: 1,
          item_id: 1,
          amount: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 1,
          item_id: 2,
          amount: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 1,
          item_id: 3,
          amount: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 1,
          item_id: 4,
          amount: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 2,
          item_id: 1,
          amount: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 2,
          item_id: 4,
          amount: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 3,
          item_id: 2,
          amount: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 3,
          item_id: 3,
          amount: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 3,
          item_id: 4,
          amount: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          survivor_id: 4,
          item_id: 1,
          amount: 8,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("inventories", null, {});
  }
};
