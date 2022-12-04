const { models } = require('../libs/sequelize');

class EspeciesService {

  async create(data) {
    const [especie, created] = await models.Especie.findOrCreate({
      where: data
    });

    if (created == false) {
      especie.message = "especie allready exists"
    }


    return especie;
  }

  async find() {
    const data = await models.Especie.findAll();

    return data;
  }

  findOne() {

  }

  async update(id, data) {
    await models.Especie.update(
      data,
      {
        where: {
          id
        }
      }
    );
    return { id, 'body': data }
  }

  delete() {

  }
}

module.exports = EspeciesService;
