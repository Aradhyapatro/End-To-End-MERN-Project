const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please Enter a Goal"],
    },
  },
  { timestamps: true }
);

const Goals = mongoose.model("Goals", goalSchema);

module.exports = { Goals };
