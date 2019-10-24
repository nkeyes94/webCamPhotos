// * Bringing in our required packages
var express = require("express");
var fs = require("fs");
const path = require("path");
const { get } = require("request");
var FileSaver = require("file-saver")(app);

// * PORT and App config
var PORT = process.env.PORT || 8080;
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// * Serving the images folder
    // ? This is required to save to
app.use(express.static(path.join(__dirname, "./images")));

app.get('/', (req, res) => res.redirect('/webCamPhoto'));
app.get('webCamPhoto', (req, res) => res.sendFile(path.join(viewsDirectory, "index.html")));


// * Server listener
app.listen(PORT, function(){
    console.log("Application listening on localhost:"+PORT);
})