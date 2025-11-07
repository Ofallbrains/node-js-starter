const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.end('Home Page')
            break;
        case '/about':
            res.statusCode = 200
            res.end('About Page')
            break;
        case '/contact':
            res.statusCode = 200
            res.end('Contact Page')
            break;
    
        default:
            res.statusCode = 404;
            res.end('Unkown routes')
            break;
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})