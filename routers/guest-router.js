// Imports
const express = require("express");
const router = express.Router();

// Controller imports
const {
  getGuests,
  addGuest,
  deleteGuest,
  editGuest,
} = require("../controllers/guest-controllers");

// Endpoints
router.get("/", getGuests);
router.post("/add", addGuest);
router.delete("/:guestId", deleteGuest);
router.put("/:guestId", editGuest);

module.exports = { router };
