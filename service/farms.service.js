const { models } = require('../libs/sequelize');

class FarmsService {

  constructor() {

  }

  create() {

  }

  async find() {
    const data = await models.Farm.findAll();
    return data
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = FarmsService;
