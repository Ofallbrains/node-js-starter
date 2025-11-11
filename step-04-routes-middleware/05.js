const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/api/error', (req, res, next) => {
    next(new Error('Something went wrong!'));
    //or throw new Error('SOmething went wrong!)
});

app.get('/api/ok', (req, res) => {
  res.send('Everything is ok');
});


app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({error: err.message})
    
})
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});