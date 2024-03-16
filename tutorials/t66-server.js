const http = require('http');
const fs = require('fs');
const port = 80;
const hostname = '127.0.0.1';

const fileContent = fs.readFileSync('t37-css-tansition.html');

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
