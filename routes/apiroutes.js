const db = require("../models");

module.exports = function(app) {

//GET request grabs info to fill workout page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

//GET request grabs info for range
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });

//POST to add completed workouts to DB
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });

//Update exercise's by id value
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};