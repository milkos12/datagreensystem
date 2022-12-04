
const { models } = require('../libs/sequelize');

class ReferenceService {

  async create(body) {
    const dataReturn = await models.Reference.findOrCreate({
      where:{
        name: body.name
      },
      defaults: body
    });

    return dataReturn
  }

  async find() {
    const dataReturn =  await models.Reference.findAll();
    return dataReturn
  }

  findOne() {

  }

  async update(id, body) {
    await models.Reference.update(body, {
      where: {
        id
      }
    });

    const dataReturn = {
      id,
      body
    };

    return dataReturn;
  }

  delete() {

  }
}

module.exports = ReferenceService;
