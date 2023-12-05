
const { User, Movies, Movie } = require('../models')
const {signToken, AuthenticationError} = require ('../../src/utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        // updateUser: async(parent, args) => {
        //     const user = await User.findOneAndUpdate(
        //         {_id}
        //     )
        //     return user
        // },
        // deleteUser: async(parent, args) => {
        //     const user = await User.deleteOne(
        //         {_id}
        //     )
        //     return user
        // },

        // addUser: async (parent, {username, email, password}) => {
        //     const user = await User.create({ username, email, password });
        //     const token = signToken(user);
        //     return { token, user };
        // },
        login: async (parent, { email, password }) =>
        {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user)

            return { token, user }
        }, 
        addMovie: async (parent, {_id, title}) =>
        {
            const movie = await Movie.findOne({ title });

            if(!movie) {
                console.alert('No such movie title. Please try again')
            }

            return movie
        },
        deleteMovie: async (parent, {_id}) =>
        {
            const deleteMovie = await Movie.findOneAndDelete({ _id });

            if(!deleteMovie) {
                console.alert('Movie was not removed from your list')
            }

        },
        addFriend: async (parent, { _id }) =>
        {
            const friend = await User.findOne({_id});

            if(!friend) {
                console.alert('No such user. Please try again')
            }

            return friend
        },
        deleteFriend: async (parent, { _id }) =>
        {
            const deleteFriend = await User.findOneAndDelete({_id});

            if(! deleteFriend) {
                console.alert ('Friend not deleted')
            }
        }
    },
}

module.exports = resolvers

//do we need update/remove user?
//how do we handle adding friends?
//what queries do we really need? Find a single user to login, search for friends to add to friend list, search for media by title, delete friend, delete media from array
//how to we assign movies to a user? (no entry, just ID#)