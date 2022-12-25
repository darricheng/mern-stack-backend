/*
    Controllers are responsible to handle Request and Response
*/

const { Room, User } = require("../models");
const httpStatus = require("http-status");
const mongoose = require("mongoose");

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
  console.log(req.body);
  try {
    // Get the _id of the user that is booking the room based on the firebase_id
    const user_id = await User.find({ firebase_id: req.body.booked_by }, "_id");

    // Extract the room type to a variable for easier handling
    let roomType = req.params.roomType;

    // Find the first document for the roomType that booked is false and update booked to true
    const result = await Room.findOneAndUpdate(
      { room_type: roomType, booked: false },
      {
        ...req.body,
        guests: req.body.guests.map((guest) => mongoose.Types.ObjectId(guest)),
        booked_by: user_id[0]._id,
        booked: true,
      }
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
