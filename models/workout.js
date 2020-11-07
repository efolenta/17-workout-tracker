const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  dateTime: {
    type: Number,
    required: true
  },
  totalDuration: {
    type: Number,
    default: 0
  },
  exercises: []
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;