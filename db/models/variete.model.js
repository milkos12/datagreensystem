const { config } = require("dotenv");
const { Sequelize, Model, DataTypes } = require("sequelize");

const VARIETE_TABLE = 'varietes';

const VarietesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
      timestamps: false
    }
  }
}

module.exports = {
  VarietesSchema,
  Variete,
  VARIETE_TABLE
}
