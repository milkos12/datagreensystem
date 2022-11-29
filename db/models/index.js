const { Color, ColorSchema } = require('./color.model');
const { Variete, VarietesSchema } = require('./varietes.model');

function setupModels(sequelize) {
  Color.init(ColorSchema, Color.config(sequelize));
  Variete.init(VarietesSchema, Variete.config(sequelize));
}

module.exports = setupModels;
