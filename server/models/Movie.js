const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    director: {type: String, required: true},
    actors: [{
        type: String,
    }],
    year: {type: Number, required: true},
    whereAvailable: [{
        type: String}],
});

const Movie = model('movie', movieSchema);
module.exports = Movie;