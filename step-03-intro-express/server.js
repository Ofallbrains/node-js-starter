const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to My Express App!</h1>
        <p>This is the home page.</p>
      </body>
    </html>
  `);
})

app.get('/about', (req, res) => {
    res.send(`
    <html>
      <head><title>About</title></head>
      <body>
        <h1>About This Project</h1>
        <p>This project is a simple Express server with multiple routes.</p>
      </body>
    </html>
  `);  
})
app.get('/contact', (req, res) => {
    res.send(`
    <html>
      <head><title>Contact</title></head>
      <body>
        <h1>Contact Us</h1>
        <p>Email: contact@example.com</p>
        <p>Phone: +250 123 456 789</p>
      </body>
    </html>
  `);
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
    
})