const express = require('express')
const routerApi = require('./routes')
const router = require('./routes/products.router')
const { errorHandler, errorLogs } = require('./middlewares/error.handler')
const app = express()
const port = 3001

app.use(express.json())
routerApi(app)

// The order matters
app.use(errorLogs)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
