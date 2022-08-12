const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get -> Users')
})

router.get('/:id', (req, res) => {
  res.send('Get -> User')
})

router.post('/', (req, res) => {
  //
})

router.put('/:id', (req, res) => {
  //
})

module.exports = router;
