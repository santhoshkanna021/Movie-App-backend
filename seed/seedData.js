const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movies = require("../models/movies");

// Load .env config
dotenv.config(); // Make sure this is called before using process.env

const trendingData = [
  { id: 't-1', title: 'Squid Game', image: '/Group 66718.svg', genre: 'Action • Series', rating: 4.8, releaseDate: '2024', runtime: '1h 0m', ratingPG: 'TV-MA', overview: 'A group of contestants risk their lives in deadly games.' },
  { id: 't-2', title: 'Movie 2', image: '/Group 66719.svg', genre: 'Action • Movie', rating: 4.5, releaseDate: '2023', runtime: '2h 10m', ratingPG: 'PG-13' },
  { id: 't-3', title: 'Movie 3', image: '/Group 66720.svg', genre: 'Action • Movie', rating: 4.3, releaseDate: '2023', runtime: '1h 50m', ratingPG: 'R' },
  { id: 't-4', title: 'Movie 4', image: '/Group 66722.svg', genre: 'Action • Movie', rating: 4.0, releaseDate: '2022', runtime: '2h 0m', ratingPG: 'PG' },
  { id: 't-5', title: 'Movie 5', image: '/Group 66723.svg', genre: 'Action • Movie', rating: 4.7, releaseDate: '2024', runtime: '2h 15m', ratingPG: 'PG-13' },
  { id: 't-6', title: 'Movie 6', image: '/Group 66724.svg', genre: 'Action • Movie', rating: 4.2, releaseDate: '2023', runtime: '1h 45m', ratingPG: 'R' },
];

const popularData = [
  { id: 'p-1', image: '/Image.svg', title: 'Antman & The Wasp Quantumania', rating: 4.2, genre: 'Action • Movie', releaseDate: '2023', runtime: '2h 5m', ratingPG: 'PG-13', overview: 'Scott Lang and Hope Van Dyne explore the Quantum Realm.' },
  { id: 'p-2', image: '/Image 1.svg', title: 'Air; Courting Ah Legend', rating: 4.8, genre: 'Action • Movie', releaseDate: '2023', runtime: '1h 52m', ratingPG: 'R' },
  { id: 'p-3', image: '/Image 2.svg', title: 'John Wick: Chapter 4', rating: 4.5, genre: 'Action • Movie', releaseDate: '2023', runtime: '2h 49m', ratingPG: 'R' },
  { id: 'p-4', image: '/image 3.svg', title: 'Mechamato Movie', rating: 4.0, genre: 'Action • Movie', releaseDate: '2022', runtime: '1h 56m', ratingPG: 'PG' },
  { id: 'p-5', image: '/image 4.svg', title: 'Wednesday Season 1', rating: 4.7, genre: 'Action • Series', releaseDate: '2022', runtime: '0h 45m', ratingPG: 'TV-14' },
  { id: 'p-6', image: '/Image 5.svg', title: 'Beef Series', rating: 4.3, genre: 'Action • Series', releaseDate: '2023', runtime: '0h 35m', ratingPG: 'TV-MA' },
  { id: 'p-7', image: '/Image 6.svg', title: 'Valhalla Murders Series', rating: 4.1, genre: 'Action • Series', releaseDate: '2020', runtime: '0h 50m', ratingPG: 'TV-MA' },
  { id: 'p-8', image: '/Image 7.svg', title: 'The Witcher Volume 2', rating: 4.6, genre: 'Action • Series', releaseDate: '2021', runtime: '1h 0m', ratingPG: 'TV-MA' },
  { id: 'p-9', image: '/Image 8.svg', title: 'Toxic', rating: 4.4, genre: 'Action • Movie', releaseDate: '2024', runtime: '1h 40m', ratingPG: 'R' },
  { id: 'p-10', image: '/Image 9.svg', title: 'Insider', rating: 4.2, genre: 'Action • Movie', releaseDate: '2023', runtime: '2h 0m', ratingPG: 'PG-13' },
  { id: 'p-11', image: '/image 4.svg', title: 'Race Season 1', rating: 4.5, genre: 'Action • Series', releaseDate: '2023', runtime: '0h 40m', ratingPG: 'TV-14' },
  { id: 'p-12', image: '/Image 11.svg', title: 'Ghost Doctor', rating: 4.3, genre: 'Action • Series', releaseDate: '2022', runtime: '1h 0m', ratingPG: 'TV-14' },
];

const allMoviesData = [...trendingData, ...popularData];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Movies.insertMany(allMoviesData);
    console.log("✅ Movies data seeded successfully.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
  });
