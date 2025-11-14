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
    const { minPrice, maxPrice, search } = req.query

    let filteredProducts = products

    if (minPrice) {
        const min = parseFloat(minPrice)
        if (!isNaN(min)) {
            filteredProducts = filteredProducts.filter(p => p.price >= min);
        }
    }

    if (maxPrice) {
        const max = parseFloat(maxPrice);
        if (!isNaN(max)) {
            filteredProducts = filteredProducts.filter(p => p.price <= max);
        }
    }

    if (search) {
        const searchLower = search.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchLower)
        );
    }

    res.json(filteredProducts);
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});