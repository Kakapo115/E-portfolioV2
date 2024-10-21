var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
require("dotenv").config();

// Add reference to the routes file
var devroute = require("./routes/api/devroute");

var app = express();

const cors = require("cors");
// Enable CORS for all routes
app.use(
  cors({
    credentials: true,
    origin: "https://ricky-syme-e-portfoliov2.netlify.app",
  })
);

//Add body-parser middleware to handle JSON data
app.use(bodyparser.json());

// Connect to mongo using mongoose.
// promises


mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(function (err) {
    console.log("MongoDB connected...");
  })
  .catch(function (err) {
    console.log(err);
  });

//set port 5000 or the production server's
//preconfigured service port
var port = process.env.PORT || 5000;

app.use("/api/dev", devroute);

app.get("/", function (req, res) {
  res.json({ reply: "Route for HOME path." });
});

app.listen(port, function () {
  console.log("Server started on port:" + port);
});
