const {Schema, model} = require('mongoose');

const movieSchema = new Schema({

    title: {type: String, required: true},
    director: {type: String, required: true},
    actors: {type: String, reuqired: true},
    year: {type: Number, required: true},
    whereAvailable: {type: String, required: true},
    plot: {type: String, required: true},
    genre: {type: String, required: true}
});

const Movie = model('movie', movieSchema);
module.exports = Movie;

