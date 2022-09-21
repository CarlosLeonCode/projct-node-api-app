const express = require('express');
const faker = require('faker');
const router = express.Router();
const UserService = require('../services/users.service')

const service = new UserService();

router.get('/', async (req, res) => {
  try{
    const users = await service.find()
    res.json(users)
  }catch (error) {

  }
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
