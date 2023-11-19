const express = require("express");
const router = express.Router();
const {
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getComments).post(createComment);
router.route("/:id").delete(protect, deleteComment);

module.exports = router;
