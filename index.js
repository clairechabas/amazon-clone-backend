const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.port || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello from Amazon Clone API'));
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(PORT, (err) => {
  if (err) console.log(`Error: ${err}`);
  console.log(`Listenning on port ${PORT}`);
});
