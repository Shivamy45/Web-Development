const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 80;

mongoose.connect('mongodb://127.0.0.1:27017/DanceWeb');

// To get the input data using body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    concern: String
});

const Contact = mongoose.model("Contact", contactSchema);

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));

// PUG SPECIFIC STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// END POINTS
app.get("/", (req, res) => {
    res.status(200).render("t79-home.pug");
});

app.get("/contact", (req, res) => {
    res.status(200).render("t79-contact.pug");
});

app.post("/contact", (req, res) => {
    var userData = new Contact(req.body);
    userData.save().then(() => {
        res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("Item was not saved yet now to the database");
    });
});

// SERVER STARTS
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});
