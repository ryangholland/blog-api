const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      required: [true, "Please add a first name."],
    },
    lName: {
      type: String,
      required: [true, "Please add a last name."],
    },
    email: {
      type: String,
      required: [true, "Please add an email."],
    },
    password: {
      type: String,
      required: [true, "Please add a password."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
