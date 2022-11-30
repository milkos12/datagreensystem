const {  DataTypes, Model, Sequelize } = require('sequelize');

const GAUGE_TABLE = 'gauges';

const GaugeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Gauge extends Model {
  static config(sequelize){
    return{
      sequelize,
      modelName: 'gauge',
      tableName: GAUGE_TABLE,
      timestamps: true
    }
  }
}

module.exports = {
  GAUGE_TABLE,
  GaugeSchema,
  Gauge
}
