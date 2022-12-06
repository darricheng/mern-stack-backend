/*
    Controllers are responsible to handle Request and Response
*/

const { Room } = require("../models");
const httpStatus = require("http-status");

// Controllers
const findRooms = async (req, res) => {
  try {
    const result = await Room.find(req.query);
    res.json(result);
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
  findRooms,
  bookRoom,
  cancelRoom,
};
