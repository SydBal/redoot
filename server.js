const path = require('path');
const express = require('express');
const app = express();

// Frontend
app.use(express.static(path.join(__dirname, '/frontend/static')));
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/static/index.html');
});

// Config for Heroku Buildpack
const port = process.env.PORT || 80;

// Service!
app.listen(port, () => {
  console.log('listening on *:80');
});