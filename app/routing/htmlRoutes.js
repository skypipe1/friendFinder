
// GET route to /survey which should display on server page
// A default, catch-all route that leads to `home.html` which displays the home page.


// pulls in required depedencies
var path = require("path");



// home Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});




