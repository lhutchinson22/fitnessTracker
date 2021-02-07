const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is required"
  },
  type: {
    type: String,
    trim: true,
    required: "type of workout is required",
  },
  distanceTraveled: Number,
  weight: {
    type: Number,
    required: "weight is required",
  },
  sets: {
    type: Number,
    required: "sets are required",
  },
  reps: {
    type: Number,
    required: "reps are required",
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;