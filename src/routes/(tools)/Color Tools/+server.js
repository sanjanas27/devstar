// server.js
const express = require('express');
const app = express();
const port = 3000;

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'];

app.get('/api/colors', (req, res) => {
  res.json(colors);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(Server is running at http://localhost:${port});
});