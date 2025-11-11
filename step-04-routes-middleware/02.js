const express = require('express');
const app = express();
const port = 3000

const checkAuth = (req, res, next) => {
    const authHeader = req.headers['auth-header'];

    if (authHeader === 'a123') {
        next()
    } else {
        res.status(401).send('Unauthorised')
    }
}

//protected route
app.get('/api/protected', checkAuth, (req, res) => {
    res.send("You've accessed a protexted route")
})

//unprotected route
app.get('/api/public', (req, res) => {
    res.send("Public route")
})

//or use  app.use('/api/admin', checkAuth);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
    
})