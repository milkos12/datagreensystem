const { Model, DataTypes, Sequelize } = require('sequelize');

const COLOR_TABLE = 'colors';

const ColorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Color extends Model {
  static associate() {

  }

  static config(sequelize) {
    return{
      sequelize,
      tableName: COLOR_TABLE,
      nomdelName: 'Color',
      timestamps: false
    }

  }
}

module.exports = {
  COLOR_TABLE,
  ColorSchema,
  Color

}
