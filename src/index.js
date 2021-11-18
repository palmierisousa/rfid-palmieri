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
  const { tag, timestamp } = request.query;

  const ts = timestamp.substring(6, 8) + '/' + timestamp.substring(4, 6) + '/' +
            timestamp.substring(0, 4) + ' ' + timestamp.substring(8, 10) + ':' +
            timestamp.substring(10, 12) + ':' + timestamp.substring(12, 14);
  const res = {tag: tag, timestamp: ts}
  console.log(res);
  
  return response.status(201).json(res);

});

module.exports = app;
