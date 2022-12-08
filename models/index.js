// Require dotenv for seed and clearDb scripts
require("dotenv").config();

// Imports
const mongoose = require("mongoose");
const Guest = require("./guest");
const User = require("./user");
const Room = require("./room");

// Config
const mongoURI = process.env.MONGO_URL;
console.log(mongoURI);
const db = mongoose.connection;

// Connect
mongoose.connect(mongoURI, () => {
  console.log("Connection to Mongo DB established.");
});

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
  Guest,
  User,
  Room,
};
