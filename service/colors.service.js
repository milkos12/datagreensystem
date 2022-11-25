const { models } = require('./../libs/sequelize');

class ColorsService {

  constructor() {

  }

  create() {

  }

  async find() {
    const data = await models.Color.findAll();
    return data;
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = ColorsService;
