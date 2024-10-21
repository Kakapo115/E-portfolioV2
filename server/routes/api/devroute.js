var express = require("express");
var router = express.Router();
//import the webapp model (schema) from the models folder
var devs = require("../../models/dev");

// Email Service
const sendMail = require("../api//sendMail");
router.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Add some basic validation if required

  const success = await sendMail(name, email, message);

  if (success) {
    return res.json({ success: true });
  } else {
    return res.status(500).json({ success: false });
  }
});

//@route GET /api/dev
//@desc Get all dev collection data from the DB
//@access Public
router.get("/", function (req, res) {
  const { type } = req.query; // Get the 'type' query parameter
  let query = {};

  if (type) {
    query.type = type; // Add type filtering if specified
  }

  devs
    .find(query)
    .sort({ name: 1 }) // Sort by name or any other field if needed
    .then(function (dev) {
      res.json(dev);
    })
    .catch(function (err) {
      console.log("Error fetching data:", err);
      res.status(500).json({ error: "Server error" });
    });
});


module.exports = router;
