const asyncHandler = require("express-async-handler");

const Comment = require("../models/commentModel");

// @desc    Get comments
// @route   GET /api/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find();

  res.status(200).json(comments);
});

// @desc    Create comment
// @route   POST /api/comments
// @access  Public
const createComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  const comment = await Comment.create({
    text: req.body.text,
    post: req.body.post,
    author: req.body.author,
  });

  res.status(200).json(comment);
});

// @desc    Delete comment
// @route   DELETE /api/comments/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    res.status(400);
    throw new Error("Comment not found.");
  }

  await comment.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getComments,
  createComment,
  deleteComment,
};
