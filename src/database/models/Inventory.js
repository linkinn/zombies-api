const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Inventory extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Survivor, {
      foreignKey: "survivor_id",
      as: "survivor"
    });
    this.belongsTo(models.Item, {
      foreignKey: "item_id",
      as: "item"
    });
  }
}

module.exports = Inventory;
