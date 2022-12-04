const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(250);

const createProvidersSchemas = Joi.object({
  name: name.required()
});

const updateProvidersSchemas = Joi.object({
  name: name
});

const getProvidersSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createProvidersSchemas,
  updateProvidersSchemas,
  getProvidersSchema
}
