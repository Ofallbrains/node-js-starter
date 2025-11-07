// completeServer.js
const http = require('http');
const url = require('url');

const PORT = 3000;

const products = [
  { id: 1, name: 'Mobilephone', price: 400 },
  { id: 2, name: 'Headphone', price: 200 },
];

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', pathname.startsWith('/api') ? 'application/json' : 'text/html');

    switch (pathname) {
      case '/':
        res.writeHead(200);
        res.end('Home Page');
        break;

      case '/about':
        res.writeHead(200);
        res.end('About Page');
        break;

      case '/contact':
        res.writeHead(200);
        res.end('Contact Page');
        break;

      case '/greet':
        const name = query.name || 'Guest';
        res.writeHead(200);
        res.end(`Hello, ${name}!`);
        break;

      case '/search':
        const q = query.q || 'nothing';
        res.writeHead(200);
        res.end(`You searched ${q}`);
        break;

      case '/api/products':
        res.writeHead(200);
        res.end(JSON.stringify(products));
        break;

      default:
        res.writeHead(404);
        res.end('Page Not Found');
    }
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Complete server running at http://localhost:${PORT}`);
});
