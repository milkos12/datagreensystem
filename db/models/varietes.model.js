const { config } = require("dotenv");
const { Sequelize, Model, DataTypes } = require("sequelize");

const NOMBRE_TABLE = 'varietes';

const VarietesSchema = {
  id: {
    type: DataTypes.INTEGER,
    aoutoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true

  }
}

class Variete extends Model {

  static config(sequelize){
    return{
      sequelize,
      modelName: 'Variete',
      tableName: NOMBRE_TABLE,
    }
  }
}

module.exports = {
  VarietesSchema,
  Variete,
  NOMBRE_TABLE
}
