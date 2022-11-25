const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string().min(3).max(45);

const createEspeciesSchema = Joi.object({
  nombre: nombre.required()
});

const updateEspeciesSchema = Joi.object({
  nombre: nombre
});

const getEspecisShema = Joi.object({
  id: id.required()
});


module.exports = {

  createEspeciesSchema,
  updateEspeciesSchema,
  getEspecisShema

}
