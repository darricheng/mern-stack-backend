const { Room, Guest } = require("./models");

const rooms = [
  {
    room_type: "single-room",
    booked: false,
  },
  {
    room_type: "single-room",
    booked: false,
  },
  {
    room_type: "single-room",
    booked: false,
  },
  {
    room_type: "single-room",
    booked: false,
  },
  {
    room_type: "double-room",
    booked: false,
  },
  {
    room_type: "double-room",
    booked: false,
  },
  {
    room_type: "double-room",
    booked: false,
  },
  {
    room_type: "deluxe-room",
    booked: false,
  },
  {
    room_type: "deluxe-room",
    booked: false,
  },
  {
    room_type: "suite-room",
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
