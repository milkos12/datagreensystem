'use strict';

const { VARIETE_TABLE, VarietesSchema } = require('../models/variete.model');
const { FARM_TABLE, FarmShema } = require('../models/farm.model');
const { ESPECIE_TABLE, EspecieSchema } = require('../models/especie.model');
const { GAUGE_TABLE, GaugeSchema } = require('../models/gauge.model');
const { PROVIDER_TABLE, ProviderSchema } = require('../models/provider.model');
const { REFERENCE_TABLE, ReferenceSchema } = require('../models/reference.model');
const { ColorSchema, COLOR_TABLE } = require('../models/color.model');
//const { singularize } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(VARIETE_TABLE, VarietesSchema);
    await queryInterface.createTable(FARM_TABLE, FarmShema);
    await queryInterface.createTable(ESPECIE_TABLE, EspecieSchema);
    await queryInterface.createTable(GAUGE_TABLE, GaugeSchema);
    await queryInterface.createTable(PROVIDER_TABLE, ProviderSchema);
    await queryInterface.createTable(REFERENCE_TABLE, ReferenceSchema);
    await queryInterface.createTable(COLOR_TABLE, ColorSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(VARIETE_TABLE);
    await queryInterface.dropTable(FARM_TABLE);
    await queryInterface.dropTable(ESPECIE_TABLE);
    await queryInterface.dropTable(GAUGE_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    await queryInterface.dropTable(REFERENCE_TABLE);
    await queryInterface.dropTable(COLOR_TABLE);

  }
};
