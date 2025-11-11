const express = require('express');
const app = express()
const port = 3000

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 150 }
];
  
const users = [
  { id: 1, username: 'denyse', email: 'denyse@example.com' },
  { id: 2, username: 'alex', email: 'alex@example.com' }
];

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
    
})