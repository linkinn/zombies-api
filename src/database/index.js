const Sequelize = require("sequelize");

const databaseConfig = require("../config/database");

const Iventory = require("./models/Inventory");
const Item = require("./models/Item");
const Survivor = require("./models/Survivor");
const Trade = require("./models/Trade");

const models = [Iventory, Item, Survivor, Trade];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connect = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connect))
      .map(model => model.associate && model.associate(this.connect.models));
  }
}

module.exports = new Database();
