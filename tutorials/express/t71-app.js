const express = require('express');
const app = express();
const port = 80;

app.get("/home", (req, res) => {
    res.status(200).send("This is my home page of app");
});
app.post("/home", (req, res) => {
    res.status(200).send("This is post of my home page of app");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is my about page of app");
});
app.post("/about", (req, res) => {
    res.status(200).send("This is post of my about page of app");
});
app.get("/error", (req, res) => {
    res.status(200).status(404).send("Error 404 Page not found");
});

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});