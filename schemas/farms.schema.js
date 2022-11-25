const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string().min(3).max(45);
const extension = Joi.number.min(10);

const createFarmsSchema = Joi.object({
  nombre: nombre.required(),
  extension: extension.require()
});

const updateFarmsShema = Joi.object({
  nombre: nombre,
  extension: extension
});

const getFarmsSchema = Joi.object({
  id: id.required()
});


module.exports = {
  createFarmsSchema,
  updateFarmsShema,
  getFarmsSchema
}
