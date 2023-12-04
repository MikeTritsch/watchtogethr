const {Schema, model} = require('mongoose');
const {ObjectId} = require('mongoose').Types;

const userSchema = new Schema({
    id: {type: Schema.Types.ObjectId, default: () => new ObjectId()},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {String, minLength: 8, required: true},
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
});

const User = model('user', userSchema);
module.exports = User;