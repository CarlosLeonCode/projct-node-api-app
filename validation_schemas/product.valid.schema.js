const Joi = require('joi');

// Define attributes to validate
const id = Joi.number();
const name = Joi.string().min(3).max(50);
const price = Joi.number().integer().min(10);
const img = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  img: img.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  img: img,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
