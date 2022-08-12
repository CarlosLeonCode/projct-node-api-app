const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate()
  }

  generate(){
    const limit = 50;
    for(let i = 1; i <= limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl()
      })
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    const se = getCar();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne(id) {
    return this.products.find(item => item.id == id)
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Product not found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Product not found')
    }
    this.products.splice(index, 1)
    return { message: 'delete it!' }
  }
}

module.exports = ProductsService;