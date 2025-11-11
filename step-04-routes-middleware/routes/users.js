const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
});

router.get('/:id', (req, res) => {
  res.json({ message: `User ID: ${req.params.id}` });
});

router.post('/', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User added successfully!', user: newUser });
});

module.exports = router;