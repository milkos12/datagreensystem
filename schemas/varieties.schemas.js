const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45);

const createVarietiesSchema = Joi.object({
  name: name.required()
});

const updateVarietiesSchema = Joi.object({
  name: name,
});

const getVarietieSchema = Joi.object({
  id: id.required()
});

module.exports = {

  createVarietiesSchema,
  updateVarietiesSchema,
  getVarietieSchema

}
