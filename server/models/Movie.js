const {Schema, model} = require('mongoose');

const movieSchema = new Schema({

    Title: {type: String, required: true},
    Director: {type: String, required: true},
    Actors: {type: String, reuqired: true},
    Year: {type: String, required: true},
    Plot: {type: String, required: true},
    Genre: {type: String, required: true},
    imdbID: {type: String, required: true},
    Poster: {type: String, required: true}
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;

