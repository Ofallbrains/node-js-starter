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

const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  
   if (!name || !price) {
    return res.status(400).json({error: 'Missing required fields: name and price are required'});
  }

   if (typeof name !== 'string') {
    return res.status(400).json({error: 'Invalid name: must be a string'});
  }

  if (typeof price !== 'number') {
    return res.status(400).json({error: 'Invalid price: must be a number'});
  }

    if (price <= 0) {
    return res.status(400).json({ error: 'Price must be greater than 0' });
  }

  next();

}

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.post("/api/products", validateProduct, (req, res) => {
  res.json({
    message: "Product created successfully!",
    data: req.body,
  });
});

app.put("/api/products/:id", validateProduct, (req, res) => {
  res.json({
    message: "Product updated successfully!",
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});