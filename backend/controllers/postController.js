const asyncHandler = require("express-async-handler");

const Post = require("../models/postModel");

// @desc    Get posts
// @route   GET /api/posts
// @access  ?
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  res.status(200).json(posts);
});

// @desc    Create post
// @route   POST /api/posts
// @access  ?
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a title.");
  }
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  const post = await Post.create({
    title: req.body.title,
    text: req.body.text,
  });

  res.status(200).json(post);
});

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  ?
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found.");
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  ?
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found.");
  }

  await post.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
