const ip = require('ip');
const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  console.log(new Date(), 'Received request');
  res.send('Hello, World!<br />This Service IP: ' + ip.address());
});

app.listen(8080, () => console.log('SimplePage is now online on port 8080'));