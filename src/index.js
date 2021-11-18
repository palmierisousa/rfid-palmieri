const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/tag', (request, response) => {
  const { EPC } = request.body;
  console.log(EPC);

  return response.status(201).json();
});

app.get('/tag', (request, response) => {
  console.log(request.query);

  return response.status(201).json();
});

module.exports = app;