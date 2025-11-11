const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to the home page!")
})

app.get('/about', (req, res) => {
    res.send("This project highlights multiple routing in express")
})
app.get('/contact', (req, res) => {
    res.send("Contact Us!")
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
    
})