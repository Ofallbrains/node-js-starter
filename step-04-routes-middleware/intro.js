const express = require('express');
const app = express();
const port = 3000

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger)

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted');
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
    
})