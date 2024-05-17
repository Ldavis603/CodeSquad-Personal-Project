const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const app = express();
const PORT = 3000;
// const cors = require("cors");

app.use(morgan("dev"));

// Define routing variable
const exerciseRoutes = require('./routes/exerciseRoutes');


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));


// Route path
app.use("/api/exercise", exerciseRoutes);


//GET routes
app.get("/", (req, res, next) => {
  res.status(200).json({success: {message: "Index successful"}, statusCode: 200});
});


// app.get("/account", (req, res, next) => {
//   res.status(200).json({success: {message: "This route points to the Login/Account Page"}, statusCode: 200});
// });



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
