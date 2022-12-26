const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  room_type: {
    type: String,
    enum: ["single-room", "double-room", "deluxe-room", "suite-room"],
    required: true,
  },
  add_ons: [
    {
      type: String,
    },
  ],
  guests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Guest",
    },
  ],
  booked: {
    type: Boolean,
    required: true,
  },
  booked_start_date: {
    type: Date,
  },
  booked_end_date: {
    type: Date,
  },
  booked_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
