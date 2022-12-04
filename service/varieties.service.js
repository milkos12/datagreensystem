
const { models } = require('../libs/sequelize')

class VarietiesService {

  constructor() {

  }

  async create(body) {
    let [dataReturn, created] = await models.Variete.findOrCreate({
      where:{
        name: body.name
      },
      defaults: body
    });

    dataReturn = {
      variete: dataReturn,
      create: created
    }

    return dataReturn;
  }

  async find() {
    const data = await models.Variete.findAll();
    return data;
  }

  async findOne(id) {
    const data = await models.Variete.findByPk(id);
    return data;
  }

  update() {

  }

  delete() {

  }
}

module.exports = VarietiesService;
