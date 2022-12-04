const {Model, DataTypes, Sequelize } = require('sequelize');

const ESPECIE_TABLE = 'especies';

const EspecieSchema = {
  id:{
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class Especie extends Model{
   static config(sequelize) {
    return{
      sequelize,
      modelName: 'Especie',
      tableName: ESPECIE_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  ESPECIE_TABLE,
  EspecieSchema,
  Especie
}
