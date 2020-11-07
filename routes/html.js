const path = require("path");

module.exports = (app) => {
  //Home page route
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    //Exercise page route
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    //Stats page route
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    //Default redirect to home page
    app.get("*", (req, res) => {
        res.redirect("/");
    });
};