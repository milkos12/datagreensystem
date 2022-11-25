const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(10);

const createGaugesSchema = Joi.object({
  name: name.required()
});

const updateGaugesShema = Joi.object({
  name: name
});

const getGaugesSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createGaugesSchema,
  updateGaugesShema,
  getGaugesSchema
}
