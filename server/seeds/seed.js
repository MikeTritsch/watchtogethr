const db = require('../config/connection');
const { Movie } = require('../models');
const cleanDB = require('./cleanDB');

const movieData = require('./movieData.json');

db.once('open', async () => {
  await cleanDB('Movie', 'movies');

  await Movie.insertMany(movieData);

  console.log('Movies seeded!');
  process.exit(0);
});
