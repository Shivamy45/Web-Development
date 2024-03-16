const http = require('http');
const fs = require('fs');
const port = 80;
const hostname = '127.0.0.1';

const home = fs.readFileSync('t67-home.html')
const services = fs.readFileSync('t67-services.html');
const academics = fs.readFileSync('t67-academics.html');
const contactUs = fs.readFileSync('t67-contactUs.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/services') {
        res.end(services);
    }
    else if (url == '/academics') {
        res.end(academics);
    }
    else if (url == '/contactUs') {
        res.end(contactUs);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
