const Workout = require("../models/workout.js");

module.exports = (app) => {
    
    // find all workouts and display in descending order
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
    
      // create a new workout
      app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

      // find one entry and update it by the id and push the new body
      app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            {
                _id: req.params.id
              },
            { $push: { exercises: req.body } }, { new: true })
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

      // find the last 7 days and add the field of total duration
      app.get("/api/workouts/range", ({ body }, res) => {

        Workout.aggregate( [
            {
                $addFields: {
                    totalDuration: {$sum: "$exercises.duration" }
                }
            }
        ])
        // limit by the last 7 days
        .limit(7)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
}


