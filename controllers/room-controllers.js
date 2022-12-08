/*
    Controllers are responsible to handle Request and Response
*/

const { Room } = require("../models");
const httpStatus = require("http-status");

// Controllers
const findRooms = async (req, res) => {
  try {
    // Query the database based on the query params
    const result = await Room.find(req.query);
    // Return the resulting object as JSON
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const bookRoom = async (req, res) => {
  try {
    // Extract the room type to a variable for easier handling
    let roomType = req.params.roomType;

    // Find the first document for the roomType that booked is false and update booked to true
    const result = await Room.findOneAndUpdate(
      { room_type: roomType, booked: false },
      { booked: true }
    ); // Returns null if no rooms are found
    console.log(result);

    // If no empty rooms are found, return the relevant httpStatus
    if (!result) {
      res
        .status(httpStatus.NOT_FOUND)
        .send(`No empty rooms found for request: ${roomType}`);
      return;
    }

    // If a room was booked successfully, return http success
    res.status(httpStatus.OK).send(`${roomType} booked`);
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
