const Workout = require("../models/workout.js");
const mongoose = require("mongoose");

module.exports = (app) => {
  // Create a new workout
  app.post("/api/workouts", (body, res) => {
    Workout.create(body)
    .then(dbWorkouts => {
      res.status(201).json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

  // Update an exsiting workout
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
      { _id: req.params.id},
      { $push: { excercises: req.body } })
      .then(dbWorkouts => {
        res.status(201).json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Get all workouts
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
      res.status(201).json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

  // Get the range of workouts
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
      res.status(201).json(dbWorkouts);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
}