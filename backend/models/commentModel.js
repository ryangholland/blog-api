const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text"],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
    author: {
      type: String,
      default: "Anonymous",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
