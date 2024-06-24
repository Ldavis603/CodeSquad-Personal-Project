const Exercise = require("../models/exerciseModel.js");

const getAllExercises = async (req, res, next) => {
  try {
    const exercise = await Exercise.find({});

    res.status(200).json({
      success: { message: "Found all exercises!" },
      data: exercise,
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting all exercises" },
    });
  }
};

const getExercise = async (req, res, next) => {
  const { id } = req.params;

  const foundExercise = await Exercise.findById(id);

  try {
    res.status(200).json({
      success: { message: "The exercise has been found!" },
      data: foundExercise,
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong retrieving a exercise!" },
    });
  }
};

const createExercise = async (req, res, next) => {
  const { type, exercise, description } = req.body;

  const newExercise = new Exercise({
    type: type,
    exercise: exercise,
    description: description,
  });

  try {
    await newExercise.save();
    res.status(201).json({
      success: { message: "A new exercise has been created!" },
      data: newExercise,
      statusCode: 201,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong creating an exercise!" },
    });
  }
};

const editExercise = async (req, res, next) => {
  const { id } = req.params;
  const { type, exercise, description, exerciseURL} = req.body;

  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      id,
      {
        $set: {
          type,
          exercise,
          description,
          exerciseURL
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: { message: "Exercise is updated" },
      data: updatedExercise,
      statusCode: 201,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong while editing an exercise!" },
    });
  }
};

const deleteExercise = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Exercise.findByIdAndDelete(id);
    res.status(200).json({
      success: { message: "Exercise deleted successfully!" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong while deleting the exercise!" },
    });
  }
};

module.exports = {
  getAllExercises,
  getExercise,
  createExercise,
  editExercise,
  deleteExercise,
};
