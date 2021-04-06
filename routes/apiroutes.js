const router = require("express").Router();
const Workout = require("../models").Workout;

//GET request grabs info to fill workout page
router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => res.json(err))
});

//GET request grabs info for range
router.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => res.json(err))
});

//POST to add completed workouts to DB
router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => res.json(err))
});

//Update exercise's by id value
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body } },
        { new: true }
    ).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => res.json(err));
        });

module.exports = router;