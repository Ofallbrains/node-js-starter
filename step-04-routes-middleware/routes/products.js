const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 }
    ])
})

router.get('/:id', (req, res) => {
  res.json({ message: `Product ID: ${req.params.id}` });
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  res.json({ message: 'Product added successfully!', product: newProduct });
});

module.exports = router;