const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/',(req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 5;
  for(let i = 1; i <= limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl()
    })
  }
  res.json(products)
})

router.get('/filter',(req, res) => {
  res.send('Yo soy un filtro')
})

router.get('/:id',(req, res) => {
  const { id } = req.params
  res.json([
    {
      id,
      'name': 'product 1',
      'price': 2500
    }
  ])
})

// Receive all attributes
router.put('/:id',(req, res) => {
  const { id } = req.params
  const { body } = req
  res.json({
    id,
    body,
    message: 'Put it'
  })
})

// Receive only the attributes to update
router.patch('/:id',(req, res) => {
  const { id } = req.params
  const { body } = req
  res.json({
    id,
    body,
    message: 'Patch it'
  })
})

router.post('/',(req, res) => {
  const { body } = req
  res.status(201).json({
    body,
    message: 'Created'
  })
})

router.delete('/:id',(req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Delete it'
  })
})
module.exports = router;
