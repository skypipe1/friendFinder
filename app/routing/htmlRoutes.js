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


