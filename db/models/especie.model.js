const {Model, DataTypes } = require('sequelize');

const ESPECIE_TABLE = 'especies';

const EspecieSchema = {
  id:{
    allowNull: false,
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Especie extends Model{
   static config(siqualize) {
    return {
      siqualize,
      modelName: 'Especie',
      tableName: ESPECIE_TABLE,
      timestamps: true
    }
  }
}

module.exports = {
  ESPECIE_TABLE,
  EspecieSchema,
  Especie
}