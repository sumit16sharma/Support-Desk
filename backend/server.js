const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
