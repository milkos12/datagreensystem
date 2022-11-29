const {  DataTypes, Model } = require('sequelize');

const GAUGE_TABLE = 'gauges';

const GaugeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Gauge extends Model {
  static config(siqualize){
    return {
      siqualize,
      tableName: GAUGE_TABLE,
      modelName: 'gauge',
      timestamps: true
    }
  }
}

module.exports = {
  GAUGE_TABLE,
  GaugeSchema,
  Gauge
}
