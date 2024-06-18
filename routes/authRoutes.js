const express = require("express");
const passport = require("passport");

const { register, login, logout } = require("../controllers/authController");

const router = express.Router();

// router.get("/unauthenticated", (req, res, next) => {
//   res.redirect("/");
// });

router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: "/",
    failureRedirect: "/login/google/failed",
  })
);

router.get("/login/google/failed", (req, res, next) => {
  res.json({ message: "There is a problem with Google authentication." });
});

router.get(
  "/login/github",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login/github/failed",
  })
);

router.get("/login/github/failed", (req, res, next) => {
  res.json({ message: "There is a problem with GitHub authentication" });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/api/authRoutes/login/error",
    failureMessage: true,
  }),
  login
);

router.get("/login/error", (req, res, next) => {
  res.json("Login error");
});

router.get("/logout", logout);

router.post("/register", register);

module.exports = router;
