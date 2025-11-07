
const http = require('http');

const products = [
  { id: 1, name: 'Mobilephone', price: 400 },
  { id: 2, name: 'Headphone', price: 200 },

];

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: '404 - Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
