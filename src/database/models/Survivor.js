const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Survivor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        sex: Sequelize.STRING,
        location: Sequelize.GEOMETRY,
        infected: Sequelize.BOOLEAN,
        reported: Sequelize.INTEGER,
        acess_inventary: Sequelize.BOOLEAN
      },
      { sequelize }
    );

    return this;
  }
}

module.exports = Survivor;
