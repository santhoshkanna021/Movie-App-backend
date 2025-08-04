const express = require("express");
const router = express.Router();
const Movies = require("../models/movies"); // Use require, not import

router.get('/', async (req, res) => {
  try {
    const movies = await Movies.find(); // Variable name should be different from model name
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
