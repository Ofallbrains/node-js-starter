const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query

    res.setHeader('Content-Type', 'text/plain')

    if (pathName === '/greet') {
        const name = query.name || 'Guest';
        res.statusCode = 200;
        res.end(`Hello, ${name}`)
    }
    else if (pathName === '/search') {
        const q = query.q || 'nothing';
        res.statusCode = 200;
        res.end(`You searched ${q}`)
    }
    else {
        res.statusCode = 404;
        res.end('Page not found!')
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})