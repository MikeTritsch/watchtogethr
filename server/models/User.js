const {Schema, model} = require('mongoose');
const {ObjectId} = require('mongoose').Types;
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function (next) {
    if (this.isNew) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    } 

    next()
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);
module.exports = User;