const pool = require('../libs/postgres-pool')

class UsersService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', err => console.error(err))
  }

  async create(data) {

  }

  async find() {
    const response = await this.pool.query('SELECT * FROM tasks')
    return response.rows
  }
}

module.exports = UsersService;
