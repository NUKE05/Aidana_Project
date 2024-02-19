const express = require("express");
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home");
});

let counter = 0;

app.get("/login", (req, res) => {
    res.render("home");
});

app.post('/login', (req, res, next) => {
    // Extract icecream and color from the request body
    const icecream = req.body.icecream.toLowerCase();
    const color = req.body.color.toLowerCase();

    if (icecream === "фисташковое" && color === "черни") {
        // Reset the counter and redirect to 'logged' page
        counter = 0;
        return res.redirect('/logged');
    } else {
        // Increment the counter
        counter++;

        // Check if the counter has reached 3 attempts
        if (counter >= 3) {
            // Reset the counter
            counter = 0;

            // Send an alert with the correct answers or redirect to a specific page
            return res.send("<script>alert('Правильные ответы: мороженое - фисташковое, цвет - черни'); window.location.href = '/';</script>");
        } else {
            // Redirect back to the login page or show an error message
            return res.redirect('/login'); // Modify as needed
        }
    }
});

app.get("/logged", (req, res) => {
    res.render("logged");
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


