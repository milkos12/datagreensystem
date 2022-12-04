const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class FarmsService {

  constructor() {

  }

  async create(body) {
    let [dataReturn, created] = await models.Farm.findOrCreate(
      {
        where:{
          name: body.name
        },
        defaults: body
      }
    );

    dataReturn = {
      farm:dataReturn,
      create: created
    }

    return dataReturn;
  }

  async find() {
  const data = await models.Farm.findAll();
  return data;
}

findOne() {

}

  async update(id, body) {
  try {

    await models.Farm.update(
      body,
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
    return dataReturn
  } catch (err) {
    throw boom.conflict('could not update');
  }
}

delete () {

}
}

module.exports = FarmsService;
