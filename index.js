const express = require('express');
const cors = require();
const routerApi = require('./routers');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`port-->${port}`)
});
