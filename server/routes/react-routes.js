var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Home.js"));
  });
  app.get("/Dashbaord", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Dashboard.js"));
  });
  app.get("/Date", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Date.js"));
  });
  app.get("/Signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/Signup.js"));
  });
};