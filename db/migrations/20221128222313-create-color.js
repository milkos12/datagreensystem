'use strict';

const { query } = require('express');
const { ColorSchema, COLOR_TABLE } = require('../models/color.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COLOR_TABLE, ColorSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(COLOR_TABLE);
  }
};
