const { Room } = require("./models");

const rooms = [
  {
    room_type: "Single Room",
    booked: false,
  },
  {
    room_type: "Single Room",
    booked: false,
  },
  {
    room_type: "Single Room",
    booked: false,
  },
  {
    room_type: "Single Room",
    booked: false,
  },
  {
    room_type: "Double Room",
    booked: false,
  },
  {
    room_type: "Double Room",
    booked: false,
  },
  {
    room_type: "Double Room",
    booked: false,
  },
  {
    room_type: "Deluxe Room",
    booked: false,
  },
  {
    room_type: "Deluxe Room",
    booked: false,
  },
  {
    room_type: "Suite Room",
    booked: false,
  },
];

const performSeed = async () => {
  const createdRooms = await Room.insertMany(rooms);
  console.log(`Created ${createdRooms.length} rooms`);
};

performSeed();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
