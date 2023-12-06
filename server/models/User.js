const {Schema, model} = require('mongoose');
const {ObjectId} = require('mongoose').Types;

const userSchema = new Schema({
    id: {type: Schema.Types.ObjectId, default: () => new ObjectId()},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String,  required: true},
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
});

const User = model('User', userSchema);
module.exports = User;