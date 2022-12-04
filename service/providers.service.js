
const { models } = require('../libs/sequelize');

class ProvidersService {

  async create(body) {
    let [dataReturn, created ]= await models.provider.findOrCreate({
      where: {
        name: body.name
      },
      defaults: body
    });

    dataReturn = {
      provider: dataReturn,
      create: created
    }

    return dataReturn

  }

  async find() {
   const dataReturn = await models.provider.findAll();
   return dataReturn;
  }

  findOne() {

  }

  async update(id, body) {
    await models.provider.update(body,
      {
        where:{
          id
        }
      }
    );

    const dataReturn = {
      body,
      id
    }

    return dataReturn
  }

  delete() {

  }
}

module.exports = ProvidersService;
