// Imports
const express = require("express");
const router = express.Router();

// Controller imports
const {
  findRooms,
  bookRoom,
  cancelRoom,
} = require("../controllers/room-controllers");

// Endpoints
router.get("/", findRooms);
router.post("/book/:roomType", bookRoom);
router.post("/cancel/:roomId", cancelRoom);

module.exports = { router };
