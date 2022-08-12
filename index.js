const express = require('express')
const routerApi = require('./routes')
const router = require('./routes/products.router')
const app = express()
const port = 3001

app.use(express.json())

routerApi(app)

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
