
const { models } = require('../libs/sequelize');

class GaugesService {

  async create(body) {
    let [dataReturn, created] = await models.gauge.findOrCreate(
      {
        where: {
          name: body.name
        },
        defaults: body
      }
    );

    dataReturn = {
      gauge: body,
      create: created
    };

    return dataReturn;
  }

  async find() {
    const dataReturn = await models.gauge.findAll();
    return dataReturn;
  }

  findOne() {

  }

  async update(id, body) {
    await models.gauge.update(body,
      {
        where: {
          id
        }
      }
    );

    const dataReturn = {
      id,
      body
    }

    return dataReturn;

  }

  delete() {

  }
}

module.exports = GaugesService;
