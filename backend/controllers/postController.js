const asyncHandler = require("express-async-handler");

// @desc    Get posts
// @route   GET /api/posts
// @access  ?
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET posts" });
});

// @desc    Create posts
// @route   POST /api/posts
// @access  ?
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  res.status(200).json({ message: "CREATE post" });
});

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  ?
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE post ${req.params.id}` });
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  ?
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE post ${req.params.id}` });
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
