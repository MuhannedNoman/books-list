const express = require('express');
const env = require('./env');

const app = express();

const port = 4000 || env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
