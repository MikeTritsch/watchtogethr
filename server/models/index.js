const Movie = require('./Movie');
const User = require('./User');

User.hasMany(Movie, {
    foreignKey: 'id'
})

Movie.belongsTo(User, {
    foreignKey: 'id'
})

module.exports = {Movie, User};