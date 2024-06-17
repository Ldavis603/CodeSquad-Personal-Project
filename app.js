require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");

const morgan = require("morgan");
const path = require("node:path");

const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");

// Define routing variable
const exerciseRoutes = require("./routes/exerciseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Route path
app.use("/api/exercise", exerciseRoutes);
app.use("/api/authRoutes", authRoutes);

//GET routes
app.get("/", (req, res, next) => {
  res
    .status(200)
    .json({ success: { message: "Index successful" }, statusCode: 200 });
});

// app.get("/account", (req, res, next) => {
//   res.status(200).json({success: {message: "This route points to the Login/Account Page"}, statusCode: 200});
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`class DB: ${process.env.CLASS_DB}`);
  console.log(`All authentication is active and live...`);
  console.log(`GitHub app: ${process.env.GITHUB_APP}`);
  console.log(`Google Dev console: ${process.env.CLASS_GOOGLE_DEV}`);
  console.log(`MongoDB connection loading...`);
});
