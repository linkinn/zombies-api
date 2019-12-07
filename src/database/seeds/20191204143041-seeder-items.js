"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "items",
      [
        {
          id: 1,
          name: "Agua",
          points: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: "Comida",
          points: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: "Medicamento",
          points: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: "Munição",
          points: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("items", null, {});
  }
};
