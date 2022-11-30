const { config } = require("dotenv");
const { Sequelize, Model, DataTypes } = require("sequelize");

const VARIETE_TABLE = 'varietes';

const VarietesSchema = {
  id: {
    type: DataTypes.INTEGER,
    aoutoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

  }
}

class Variete extends Model {

  static config(sequelize){
    return{
      sequelize,
      modelName: 'Variete',
      tableName: VARIETE_TABLE,
    }
  }
}

module.exports = {
  VarietesSchema,
  Variete,
  VARIETE_TABLE
}
