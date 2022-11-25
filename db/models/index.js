const { Color, ColorSchema } = require('./color.model');

function setupModels(sequelize) {
  Color.init(ColorSchema, Color.config(sequelize));
}

module.exports = setupModels;
