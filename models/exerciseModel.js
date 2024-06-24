const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "A type of exercise is required"],
    },
    exercise: {
        type: String,
        required: [true, "An exercise name is required"],
    },
    description: {
        type: String,
        required: [true, "An exercise description is required"]
    }, 
    exerciseURL: {
        type: String
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;