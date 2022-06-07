const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter the name of the user"],
    },
    email: {
      type: String,
      required: [true, "Please Enter the name of the email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter the name of the user"],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", userSchema);

module.exports = { Users };
