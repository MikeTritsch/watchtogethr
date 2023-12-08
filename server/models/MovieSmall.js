const {Schema, model} = require('mongoose');

const movieSmallSchema = new Schema({
    imdbID: {type: String, required: true}
});

const MovieSmall = model('MovieSmall', movieSmallSchema);
module.exports = MovieSmall;

