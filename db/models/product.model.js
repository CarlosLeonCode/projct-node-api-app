const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  img: {
    allowNull: false,
    type: DataTypes.TEXT
  }
}

class Product extends Model {
  static associate() {
    // some models here
  }

  static config(sequelize) {
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product'
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }
