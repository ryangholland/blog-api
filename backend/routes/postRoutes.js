const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "GET posts" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "CREATE post" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `UPDATE post ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `DELETE post ${req.params.id}` });
});

module.exports = router;
