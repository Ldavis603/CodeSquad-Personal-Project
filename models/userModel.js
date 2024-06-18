const mongoose = require("mongoose");
const passport = require("passport");



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    strategy: {
        type: String,
    },
    googleId: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;