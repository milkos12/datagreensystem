const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45);

const createEspeciesSchema = Joi.object({
  name: name.required()
});

const updateEspeciesSchema = Joi.object({
  name: name
});

const getEspecisShema = Joi.object({
  id: id.required()
});


module.exports = {

  createEspeciesSchema,
  updateEspeciesSchema,
  getEspecisShema

}
