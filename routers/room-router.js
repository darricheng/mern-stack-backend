// Imports
const express = require("express");
const router = express.Router();

// Controller imports
const {
  findAllRooms,
  findByRoomType,
  findByRoomId,
  bookRoom,
  findRoomByUser,
  cancelRoom,
} = require("../controllers/room-controllers");

// Endpoints
router.get("/all", findAllRooms);
router.get("/:roomType", findByRoomType);
router.get("/:roomId", findByRoomId);
router.post("/:roomType/book", bookRoom);
router.get("/userId", findRoomByUser);
router.post("/:roomId/cancel", cancelRoom);

module.exports = { router };
