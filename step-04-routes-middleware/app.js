const express = require('express');
const app = express();
const port = 3000;

const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users');


app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});