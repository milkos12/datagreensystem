
'use strict';

const { VARIETE_TABLE, VarietesSchema } = require('../models/variete.model');
const { Sequelize, Model, DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.changeColumn(VARIETE_TABLE, 'id', {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    });
  },

  async down(queryInterface) {

  }
};
