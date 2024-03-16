const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox</title>
    <style>
        .container {
            border: 2px solid red;
            height: 350px;
            width: 100%;
            display: flex;

            /* default flex-direction: row */

            flex-direction: row;
            /* flex-direction: row-reverse; */
            /* flex-direction: column; */
            /* flex-direction: column-reverse; */

            /* default flex-wrap: nowrap */

            flex-wrap: nowrap;
            /* flex-wrap: wrap; */
            /* flex-wrap: wrap-reverse; */

            /* flex-flow - both direction and wrap at same time */
            /* flex-flow: row-reverse wrap; */
            /* flex-flow: row wrap; */

            justify-content: center;
            /* justify-content: end; */
            /* justify-content: space-between; */
            /* justify-content: space-around; */
            /* justify-content: space-evenly; */

            align-items: center;
            /* align-items: flex-end; */
            /* align-items: end; */
            /* align-items: baseline; */
            /* align-items: normal; */
            /* align-items: stretch; */
        }

        .item {
            border: 2px solid blue;
            background-color: tomato;
            margin: 13px;
            padding: 10px;
            width: 230px;
            height: 200px;
        }

        #item1 {
            flex-grow: 2;
        }

        #item2 {
            /* order: 3; */
            flex-grow: 3;
        }

        #item3 {
            /* order: 8; */
            flex-shrink: 4;
        }

        #item4 {
            /* order: 4; */
            flex-shrink: 2;
        }

        #item5 {
            flex-basis: 120px;
            /* when flex-direction is set to row flex-basis controls width */
            /* when flex-direction is set to column flex-basis controls height */

            /* align-self: flex-start; */
            /* align-self: flex-end; */
            /* align-self: center; */
        }

        #item6 {
            /* flex: grow shrink basis; */
            flex: 2 3 210px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item" id="item1">1st box</div>
        <div class="item" id="item2">2nd box</div>
        <div class="item" id="item3">3rd box</div>
        <div class="item" id="item4">4th box</div>
        <div class="item" id="item5">5th box</div>
        <div class="item" id="item6">6th box</div>
    </div>
</body>

</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});