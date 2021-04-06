const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define workout info
const workoutSchema = new Schema({
    day: {

    },
    exercises: [
        {
            type: {

            },
            name: {

            },
            duration: {

            },
            weight: {

            },
            reps: {

            },
            sets: {
                
            },
            distance: {

            }
        }
    ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;