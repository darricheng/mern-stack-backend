/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();

// Import controllers

// Middleware
app.use(express.json());

// Endpoints

// Start server
app.listen(process.env.PORT, () => {
  console.log("Listening to port 3000...");
});
