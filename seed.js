const { Room, Guest } = require("./models");

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
const guests = [
  {
    name: "John Doe",
    breakfast: true,
    lunch: true,
    dinner: true,
  },
  {
    name: "Jane Doe",
    breakfast: false,
    lunch: true,
    dinner: false,
  },
  {
    name: "John Smith",
    breakfast: true,
    lunch: false,
    dinner: true,
  },
  {
    name: "Bob Lee",
    breakfast: false,
    lunch: false,
    dinner: true,
  },
  {
    name: "Jack Smith",
    breakfast: false,
    lunch: false,
    dinner: false,
  },
];

const performSeed = async () => {
  const createdRooms = await Room.insertMany(rooms);
  const createdGuests = await Guest.insertMany(guests);
  console.log(`Created ${createdRooms.length} rooms`);
  console.log(`Created ${createdGuests.length} guests`);
};

performSeed();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
