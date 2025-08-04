const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({

  id: String,
  title: String,
  image: String,
  genre: String,
  rating: Number,
  releaseDate: String,
  runtime: String,
  ratingPG: String,
  overview: { type: String, default: 'No overview provided' }


});

module.exports = mongoose.model("Movies",MoviesSchema);


