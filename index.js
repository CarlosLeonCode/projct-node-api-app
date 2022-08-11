const express = require('express')
const app = express()
const port = 3001


app.get('/', (request, response) => {
  response.send('Hello!')
})

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

