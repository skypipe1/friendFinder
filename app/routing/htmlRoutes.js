
// GET route to /survey which should display on server page
// A default, catch-all route that leads to `home.html` which displays the home page.


// pulls in required depedencies
var path = require("path");

// // exports html routes
module.exports = function (app) {
    
    // home Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};


