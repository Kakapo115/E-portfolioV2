// models/dev.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var devSchema = new Schema(
  {
    type: String,
    name: String,
    description: String,
    skills: String,
    imageUrl: String,
    url: String,
  },
  { collection: "dev" } // collection name matches exactly
);

module.exports = mongoose.model("dev", devSchema);