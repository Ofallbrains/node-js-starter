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
   {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 149,
    description: 'RGB mechanical keyboard with blue switches'
  }
]

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ 
      error: 'Invalid ID: ID must be a number' 
    });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ 
      error: 'Product not found' 
    });
  }

  res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json(({error: 'Invalid ID: id must be a number'}))
    }
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(400).json(({error:'Product not found'}))
    }
    products.splice(index, 1)
    res.json({message: 'Product deleted successfully', id:id})
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});