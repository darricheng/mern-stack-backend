/*
    Controllers are responsible to handle Request and Response
*/

const { Room } = require("../models");
const httpStatus = require("http-status");

// Controllers
const findAllRooms = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const findByRoomType = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const findByRoomId = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const bookRoom = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const findRoomByUser = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const cancelRoom = async (req, res) => {
  try {
    res.send("Still implementing");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Export functions
module.exports = {
  findAllRooms,
  findByRoomType,
  findByRoomId,
  bookRoom,
  findRoomByUser,
  cancelRoom,
};
