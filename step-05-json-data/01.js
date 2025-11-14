const express = require('express')
const app = express()
const port = 3000;

app.use(express.json())

let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999,
    description: 'High-performance gaming laptop'
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29,
    description: 'Ergonomic wireless mouse with USB receiver'
    },
]

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});