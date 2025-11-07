const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}`)
})

app.get('/search', (req, res) => {
    const q = req.query.q || 'nothing';
    res.send(`You searched for ${q}`)
})

app.use((req, res) => {
    res.status(404).send('Page Not found')
})

app.listen(port, () => {
    console.log('Server running');
    
})