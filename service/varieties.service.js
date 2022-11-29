
const sequelize = require('../libs/sequelize')

class VarietiesService {

  constructor() {

  }

  create() {

  }

  async find() {
    const data = await sequelize.models.Variete.findAll();
    return data;
  }

  async findOne(id) {
    const data = await sequelize.models.Variete.findByPk(id);

    return data;
  }

  update() {

  }

  delete() {

  }
}

module.exports = VarietiesService;
