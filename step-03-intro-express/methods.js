const express = require('express')
const port = 3000;
const app = express()
app.use(express.json())

//return data - get route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Your data is:', data: [1, 2, 3, 4] });
})

//accept data from client - post route
app.post('/api/data', (req, res) => {
    const newData = req.body;
    res.json({message: 'Data received successfully!', received: newData})
})

//update data by id - put route
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
res.json({message: `Data with ID ${id} updated successfully!`, updatedData})
})

//delete data by ID
app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id; 
  res.json({ message: `Data with ID ${id} deleted successfully!` });
});

app.listen(port, () => {
console.log(`Server running on ${port}`);
    
})