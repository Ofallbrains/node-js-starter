const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const validateUser = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || age === undefined) {
        return res.status(400).json({ error: 'Missing required fields: name and age' })
    }

    if (typeof name !== 'string') {
        return res.status(400).json({ error: 'Invalid type: name must be a string' });
    }

    if (typeof age !== 'number') {
        return res.status(400).json({ error: 'Invalid type: age must be a number' });
    }

    next();
}

app.post('/api/users', validateUser, (req, res) => {
  res.json({ message: 'User data is valid', user: req.body });
});


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});