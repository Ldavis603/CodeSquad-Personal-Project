const express = require("express");
const passport = require("passport");

const {
  getAllExercises,
  getExercise,
  createExercise,
  editExercise,
  deleteExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(403, "/unauthenticated");
  }
};

// router.get("/exercise", checkAuthentication, (req, res, next) => {
// });

// router.get("/exercise/create-exercise", (req, res, next) => {
//   res.json("You're in the path to create an exercise.");
// });

router.get("/", getAllExercises);

router.get("/:id", getExercise);

router.post("/create/new", createExercise);

router.put("/edit/:id", editExercise);

router.delete("/delete/:id", deleteExercise);

module.exports = router;
