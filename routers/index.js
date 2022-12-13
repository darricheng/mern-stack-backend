/*
    Routers are responsible to document APIs
*/

const express = require("express");
const cors = require("cors");
const app = express();

// Import controllers
const { router: roomRouter } = require("./room-router");
const { router: guestRouter } = require("./guest-router");
const { router: userRouter } = require("./user-router");

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN })); // To allow cross-origin requests

// Endpoints
app.use("/api/rooms", roomRouter);
app.use("/api/guests", guestRouter);
app.use("/api/users", userRouter);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
