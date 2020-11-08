const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

app.listen(8080, () => console.log('SimplePage is now online on port 8080'));