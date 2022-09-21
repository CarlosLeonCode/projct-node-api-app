const { Sequelize } = require('sequelize')
const config = require('../config/config');
const setupModels = require('../db/models/index')

const USER = encodeURIComponent(config.dbUser)
const PASS = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
})

setupModels(sequelize);
// Sync all models and create the tables
sequelize.sync();

module.exports = sequelize;
