"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "survivors",
      [
        {
          id: 1,
          name: "Fillipi Nascimento",
          age: 27,
          sex: "masculino",
          location: queryInterface.sequelize.fn(
            "ST_GeomFromText",
            "POINT(-1.195407 -47.188465)"
          ),
          infected: false,
          reported: 0,
          acess_inventary: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: "Jaime Nascimento",
          age: 30,
          sex: "masculino",
          location: queryInterface.sequelize.fn(
            "ST_GeomFromText",
            "POINT(-1.194963 -47.186453)"
          ),
          infected: false,
          reported: 1,
          acess_inventary: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: "Cris Redfild",
          age: 32,
          sex: "feminino",
          location: queryInterface.sequelize.fn(
            "ST_GeomFromText",
            "POINT(-1.198007 -47.186731)"
          ),
          infected: false,
          reported: 2,
          acess_inventary: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: "John Doe",
          age: 18,
          sex: "masculino",
          location: queryInterface.sequelize.fn(
            "ST_GeomFromText",
            "POINT(-1.200343 -47.175997)"
          ),
          infected: true,
          reported: 3,
          acess_inventary: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("survivors", null, {});
  }
};
