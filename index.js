const express = require('express');
const routerApi = require('./routes');
const router = require('./routes/products.router');
const { errorHandler, errorLogs, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
const whiteList = ['http://localhost:8080']
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error('Access not permited!'))
    }
  }
}
app.use(cors(options));

routerApi(app);

// The order matters
app.use(errorLogs);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
