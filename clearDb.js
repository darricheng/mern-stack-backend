const { Room, Guest, User } = require("./models");

const clearAllData = async () => {
  await Room.deleteMany({});
  await Guest.deleteMany({});
  // await User.deleteMany({});
};

clearAllData();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
