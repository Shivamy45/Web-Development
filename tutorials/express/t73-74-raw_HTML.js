const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
// to get the form data
app.use(express.urlencoded());

// PUG SPECIFIC STUFF0
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// END POINTS
app.get("/", (req, res) => {
    const params = {
        title: "BGMI: A fast growing game",
        content: "This is content",
        content2: "This is content 2",
    };
    res.status(200).render("t73-74-index.pug", params);
});
app.post("/", (req, res) => {
    console.log(req.body);
    let name = req.body.user_name;
    let age = req.body.user_age;
    let email = req.body.user_email;
    let feedBack = req.body.user_text;
    let outputToSave = `Client ${name}, ${age} years old has send ${feedBack} using ${email}`;
    fs.writeFileSync("t73-74-output.txt", outputToSave);
    const params = { content: "Your form has been succesfully submitted" };
    res.status(200).render("t73-74-index.pug", params);
});

// SERVER STARTS
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});
