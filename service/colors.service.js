const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class ColorsService {

  constructor() {

  }

  async create(data) {
    try {
      const dataReturn = await models.Color.create(data);
      return dataReturn;
    } catch (err) {
      throw boom.conflict('color already exists');
    }
  }

  async find() {
    const data = await models.Color.findAll();
    return data;
  }

  findOne() {

  }

  async update(data, id) {
    await models.Color.update(data, { where: { id: id } });
    const dataReturn = { id, 'body': data }
    return dataReturn

  }

  delete() {

  }
}

module.exports = ColorsService;
