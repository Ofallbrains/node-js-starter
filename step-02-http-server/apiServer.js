const express = require('express')
const app = express()
const port = 3000;

const products = [
    {id:1, name:'Mobilephone', price:400},
    {id:2, name:'Headphones', price:200}
]

app.get('/api/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json(products);
});

app.listen(port, () => {
    console.log('Server running');
    
})