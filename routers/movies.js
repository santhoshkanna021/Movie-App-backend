const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Movies = require("../models/movies");

// GET all movies with optional pagination
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const movies = await Movies.find().skip(skip).limit(limit).lean(); // lean for performance
    res.status(200).json({ success: true, data: movies });
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET movie by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid movie ID" });
  }

  try {
    const movie = await Movies.findById(id).lean();
    if (!movie) {
      return res.status(404).json({ success: false, message: "Movie not found" });
    }
    res.status(200).json({ success: true, data: movie });
  } catch (err) {
    console.error("Error fetching movie by ID:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
