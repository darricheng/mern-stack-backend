// Imports
const express = require("express");
const router = express.Router();

// Controller imports
const { getUser, createUser } = require("../controllers/user-controllers");

// Endpoints
router.get("/", getUser);
router.post("/create", createUser);

module.exports = { router };
