'use strict';
const { VARIETE_TABLE, VarietesSchema } = require('../models/variete.model');
const { Sequelize, Model, DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(VARIETE_TABLE, 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      });
      await transaction.commit();
    } catch(err){

    }
  },

  async down(queryInterface) {

  }
};
