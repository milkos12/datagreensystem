const { Model, DataTypes } = require('sequelize');

const PROVIDER_TABLE = 'providers';

const ProviderSchema = {
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

class Provider extends Model {
  static config(sequelize){

    return {
    sequelize,
    tableName, PROVIDER_TABLE,
    modelName: 'provider',
    timestamps: false
  }
  }
}
