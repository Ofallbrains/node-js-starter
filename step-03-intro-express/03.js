const express = require('express')
const port = 3000;
const app = express();

app.get('/user/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`<h1>User Page</h1><p>You are viewing the user with ID: ${userId}</p>`);
});

app.get('/product/:name', (req, res) => {
  const productName = req.params.name;
  res.send(`<h1>Product Page</h1><p>Product Name: ${productName}</p>`);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
