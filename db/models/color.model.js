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
    unique: true,
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
      modelName: 'Color',
      timestamps: false
    }

  }
}

module.exports = {
  COLOR_TABLE,
  ColorSchema,
  Color

}
