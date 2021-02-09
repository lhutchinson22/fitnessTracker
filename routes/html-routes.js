const path = require("path");

module.exports = (app) => {
    // index route loads home.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get("/index", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

  };