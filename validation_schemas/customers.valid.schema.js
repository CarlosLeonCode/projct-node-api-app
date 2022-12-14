const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(50);
const lastName = Joi.string().min(3).max(50);
const phone = Joi.number().integer();
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
})

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId
})

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
