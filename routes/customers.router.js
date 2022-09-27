const express = require('express');
const CustomersService = require('../services/customers.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../validation_schemas/customers.valid.schema');

const router = express.Router();
const service = new CustomersService();

router.get('/', async (req, res, next) => {
  try{
    const customers = await service.find();
    res.json(customers)
  }catch(err){
    next(err)
  }
})

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const customer = await service.findOne(id)
      res.json(customer)
    }catch(err) {
      next(err)
    }
  }
)

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const { body } = req
    const customer = await service.update(id, body)
    res.json(customer)
  }
)

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const { body } = req;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    }catch(err){
      next(err)
    }
  }
)

router.delete('/',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params
      const response = await service.delete(id)
      res.json(response)
    }catch(err) {
      next(err)
    }
  }
)

module.exports = router;
