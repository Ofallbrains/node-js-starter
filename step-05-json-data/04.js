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

app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({error: "Invalid ID: ID must be a number"})
    }

    const product = products.find(p => p.id === id)
    if (!product) {
        return res.status(400).json({error: 'Product not found'})
    }

    res.json(product)
})

app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({error: 'Invalid ID: ID must be a number'});
  }

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({error: 'Product not found'});
  }

  if (req.body.price !== undefined && (typeof req.body.price !== 'number' || req.body.price < 0)) {
    return res.status(400).json({error: 'Invalid price: must be a positive number'});
  }

  const updatedProduct = {
    ...products[index],
    ...req.body,
    id: products[index].id 
  };
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});