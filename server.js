// Dependencies

var express = require("express");
var path = require("path");


// Sets up the Express App
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // home Page displays when in server file

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// // survey page
// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });




// use require? nope does not work breaks code says "can not find module"
require(path.join(__dirname, '/apiRoutes.js'))(app);
require(path.join(__dirname, '/htmlRoutes.js'))(app);

// starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



