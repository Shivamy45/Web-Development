const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    try {
        const fileContent = fs.readFileSync('t40-css-grid.html');
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fileContent);
    } catch (err) {
        console.error("Error", err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("Error Loading Page");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
