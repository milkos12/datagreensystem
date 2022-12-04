'use strict';

const { VARIETE_TABLE, VarietesSchema } = require('../models/variete.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(VARIETE_TABLE, VarietesSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(VARIETE_TABLE);
  }
};
