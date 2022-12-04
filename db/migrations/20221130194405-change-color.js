'use strict';

const { ColorSchema, COLOR_TABLE } = require('../models/color.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(COLOR_TABLE, 'name', ColorSchema.name);
  },

  async down (queryInterface) {
    await queryInterface.changeColumn(COLOR_TABLE, 'name', ColorSchema.name);
  }
};
