const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45);

const createReferencesSchema = Joi.object({
  name: name.required()
});

const updateReferencesSchema = Joi.object({
  name: name
});

const getReferencesSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createReferencesSchema,
  updateReferencesSchema,
  getReferencesSchema
}
