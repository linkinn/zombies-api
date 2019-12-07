"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trades", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      submit_survivor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "survivors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      receive_survivor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "survivors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "items", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      amount: {
        type: Sequelize.INTEGER
      },
      total_points: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accept: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trades");
  }
};
