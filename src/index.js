const express = require('express');
const morgan = require('morgan');

const router = require('./routes');

const app = express();

app.use(morgan('common'));
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`azure keyvault running on port ${port}`);
});
