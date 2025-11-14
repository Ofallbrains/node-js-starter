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

let nextId = 3;

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.post('/api/products', (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({ error: 'Missing required fields: name and price' })
    }

    const newProduct = {
        id: nextId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description || ''
    }
    products.push(newProduct)

    res.status(201).json(newProduct)

})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});