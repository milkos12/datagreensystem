const { DataTypes, Model, Sequelize } = require('sequelize');

const FARM_TABLE = 'farms';

const FarmShema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING
  },
  extension:{
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Farm extends Model{
  static config(sequelize){
    return{
      sequelize,
      modelName: 'Farm',
      tableName: FARM_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  FARM_TABLE,
  FarmShema,
  Farm
}
