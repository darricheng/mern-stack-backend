/*
    Controllers are responsible to handle Request and Response
*/

const { Guest } = require("../models");
const httpStatus = require("http-status");

// Controllers
// Get guests
const getGuests = async (req, res) => {
  try {
    const guests = await Guest.find(req.query);
    res.status(httpStatus.OK).json(guests);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

// Add a new guest
const addGuest = async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(httpStatus.CREATED).json(guest);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

// Delete a guest
const deleteGuest = async (req, res) => {
  try {
    const guestId = req.params.guestId;
    const guest = await Guest.findByIdAndDelete(guestId);
    res.status(httpStatus.OK).json(guest);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

// Edit a guest
const editGuest = async (req, res) => {
  try {
    const guestId = req.params.guestId;
    const guest = await Guest.findByIdAndUpdate(guestId, req.body);
    res.status(httpStatus.OK).json(guest); // Returns the old unedited guest
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

// Export functions
module.exports = {
  getGuests,
  addGuest,
  deleteGuest,
  editGuest,
};
