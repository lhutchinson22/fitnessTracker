const Workout = require("../models/workout.js");

module.exports = (app) => {
    
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
          .sort({ date: -1 })
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
    
      app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
}

