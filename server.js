const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const movieRoutes = require('./routers/movies'); // already correct path

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🎬 Movie API is running!');
});

app.use('/api/movies', movieRoutes);

const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection (don't call listen)
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

module.exports = app;
