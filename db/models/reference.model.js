const { Model, DataTypes } = require('sequelize');

const REFERENCE_TABLE = 'references';

const ReferenceSchema = {
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

class Reference extends Model {
  static config(sequelize){
    return {
      sequelize,
      tableName: REFERENCE_TABLE,
      naemModel: 'Reference',
      timestamps: false
    }
  }
}

module.exports = {
  REFERENCE_TABLE,
  ReferenceSchema,
  Reference
}
