const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45);
const extension = Joi.number.min(10);

const createFarmsSchema = Joi.object({
  name: name.required(),
  extension: extension.require()
});

const updateFarmsShema = Joi.object({
  name: name,
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
