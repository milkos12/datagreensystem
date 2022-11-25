const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45);

const createColorsSchema = Joi.object({
  name: name.required()
});

const updateColorsSchema = Joi.object({
  name: name
});

const getColorsSchema = Joi.object({
  id: id.required()
});

module.exports = {

  createColorsSchema,
  updateColorsSchema,
  getColorsSchema

}
