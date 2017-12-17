const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const router = require('./routes');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json())
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`azure keyvault running on port ${port}`);
});
