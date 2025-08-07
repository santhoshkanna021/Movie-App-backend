const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

// GET all movies (optional - for list view)
router.get('/', async (req, res) => {
  try {
    const movies = await Movies.find().limit(20); // Optional: limit for performance
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET movie by ID (triggered when clicked)
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
