const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/',(req, res) => {
  res.send('Get -> Categories')
})

router.get('/:id',(req, res) => {
  res.send('Get -> Category')
})

router.post('/', (req, res) => {
  // -
})

router.put('/:id',(req, res) => {
  // -
})

module.exports = router;
