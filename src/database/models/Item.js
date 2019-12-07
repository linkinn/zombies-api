const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        points: Sequelize.INTEGER
      },
      { sequelize }
    );

    return this;
  }
}

module.exports = Item;
