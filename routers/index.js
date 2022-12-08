/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();

// Import controllers
const { router: roomRouter } = require("./room-router");

// Middleware
app.use(express.json());

// Endpoints
app.use("/api/rooms", roomRouter);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
