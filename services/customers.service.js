const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CustomersService {

  async create(data) {
    const customer = await models.Customer.create(data)
    return customer
  }

  async find() {
    const response = await models.Customer.findAll({
      include: ['user']
    });
    return response
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const response = await customer.update(changes);
    return response;
  }

  async delete(id) {
    const customer = this.findOne(id);
    await customer.destroy();
    return { message: 'delete it!', id: id }
  }
}

module.exports = CustomersService;
