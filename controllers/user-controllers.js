/*
    Controllers are responsible to handle Request and Response
*/

const { User } = require("../models");
const httpStatus = require("http-status");

// Controllers
const getUser = async (req, res) => {
  try {
    // Query the database based on the query params
    const result = await User.find(req.query);
    // Return the resulting object as JSON
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    // Create a new user in the database
    const result = await User.create(req.body);
    // Return the resulting object as JSON
    res.status(httpStatus.CREATED).json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Export functions
module.exports = {
  getUser,
  createUser,
};
