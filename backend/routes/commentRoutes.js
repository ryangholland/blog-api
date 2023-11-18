const express = require("express");
const router = express.Router();
const {
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").get(getComments).post(createComment);
router.route("/:id").delete(deleteComment);

module.exports = router;
