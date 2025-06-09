var express = require("express");
var router = express.Router();
//import the webapp model (schema) from the models folder
var devs = require("../../models/dev");

// Email Service
const axios = require("axios"); // Add this at the top
const sendMail = require("../api/sendMail");

router.post("/send-mail", async (req, res) => {
  const { name, email, message, token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: "Missing reCAPTCHA token" });
  }

  try {
    // Verify token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const response = await axios.post(
      verifyUrl,
      new URLSearchParams({
        secret: secretKey,
        response: token,
      })
    );

    const verificationResult = response.data;

    if (!verificationResult.success) {
      return res.status(403).json({
        success: false,
        message: "Failed reCAPTCHA verification",
      });
    }

    // Send mail if reCAPTCHA passed
    const success = await sendMail(name, email, message);

    if (success) {
      return res.json({ success: true });
    } else {
      return res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Server error" });
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
