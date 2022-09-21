const express = require('express');
const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../validation_schemas/product.valid.schema')
const router = express.Router();
const service = new ProductsService();

router.get('/',async (req, res, next) => {
  try{
    const products = await service.findAll()
    res.json(products)
  }catch(err){
    next(err)
  }
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params
      const product = await service.findOne(id)
      res.json(product)
    }catch(err){
      next(err)
    }
  }
)

// Receive only the attributes to update
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const { body } = req
    const product = service.update(id, body)
    res.json(product)
  }
)

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const { body } = req
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
  }
)

router.delete('/:id',async (req, res) => {
  try{
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
  }catch(err){
    res.status(404).json({ message: err.message })
  }
})
module.exports = router;
