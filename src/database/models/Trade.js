const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Trade extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
        total_points: Sequelize.INTEGER,
        accept: Sequelize.BOOLEAN
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Survivor, {
      foreignKey: "submit_survivor_id",
      as: "submit_survivor"
    });
    this.belongsTo(models.Survivor, {
      foreignKey: "receive_survivor_id",
      as: "receive_survivor"
    });
    this.belongsTo(models.Item, {
      foreignKey: "item_id",
      as: "item"
    });
  }
}

module.exports = Trade;
