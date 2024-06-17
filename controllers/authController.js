const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      if (error) {
        return next(error);
      }

      const newUser = new User({
        username: username,
        password: hashedPassword,
        googleId: "",
      });

      await newUser.save();

      req.login(newUser, (err) => {
        res.status(201).json({
          success: { message: "New user is created" },
          data: { username },
          statusCode: 201,
        });
      });
    });
  } catch (error) {}
};

const login = async (req, res, next) => {
  console.log(req.user);
  try {
    res.status(200).json({
    success: { message: "User logged in." },
    data: { username: req.user.username },
    statusCode: 200,
  });
} catch (error) {
    res.status(400).json({
        error: {message: "There was an error logging in."},
    });
}
};

const logout = async (req, res, next) => {
  req.logout((error) => {
    if (error) {
      res.json({
        error: { message: "Something went wrong when logging out" },
        statusCode: 400,
      });
    }
    res.json("Successfully logged out");
  });
};

module.exports = { register, login, logout };
