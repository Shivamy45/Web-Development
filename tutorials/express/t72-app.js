const express = require('express');
const app = express();
const path = require('path');
const port = 80;

// For serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!, this is printed using pug' });
});

app.get("/home", (req, res) => {
    res.status(200).send("This is my home page of app");
});
app.post("/home", (req, res) => {
    res.send("This is post of my home page of app");
});

app.get("/about", (req, res) => {
    res.send("This is my about page of app");
});
app.post("/about", (req, res) => {
    res.send("This is post of my about page of app");
});

app.get("/error", (req, res) => {
    res.status(404).send("Error 404 Page not found");
});

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});