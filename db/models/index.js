const { Color, ColorSchema } = require('./color.model');
const { Variete, VarietesSchema } = require('./variete.model');
const { Farm, FarmShema } = require('./farm.model');
const { Especie, EspecieSchema } = require('./especie.model');
const { Gauge, GaugeSchema } = require('./gauge.model');
const { Provider, ProviderSchema } = require('./provider.model');
const { Reference, ReferenceSchema } = require('./reference.model');

function setupModels(sequelize) {
  Color.init(ColorSchema, Color.config(sequelize));
  Variete.init(VarietesSchema, Variete.config(sequelize));
  Farm.init(FarmShema, Farm.config(sequelize));
  Especie.init(EspecieSchema, Especie.config(sequelize));
  Gauge.init(GaugeSchema, Gauge.config(sequelize));
  Provider.init(ProviderSchema, Provider.config(sequelize));
  Reference.init(ReferenceSchema, Reference.config(sequelize));



}

module.exports = setupModels;
