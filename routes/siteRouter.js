const express = require("express");
const passport = require("passport");

const router = express.Router();

const { register, login, logout } = require('../controllers/siteController');

router.post("/register", register);

// router.post("/login", login);
router.post("/login", 
passport.authenticate("local", {
    failureRedirect: "/login/error",
    failureMessage: true,
}),
login);

router.get("/login/error", (req, res, next) => {
    response.json("Login error");
});

router.get("/logout", logout);

module.exports = router;