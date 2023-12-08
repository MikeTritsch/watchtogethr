
const { User, Movie, MovieSmall} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('movies');
        },
        movies: async () => {
            return Movie.find()
        },
        user: async (parent, args) => {
            if (args.id) {
                return await User.findById(args.id).populate('movies')
            } else {
                return await User.findOne({ username: args.username }).populate('movies')
            }
        },
        movie: async (parent, args) => {
            return Movie.findOne({ imdbID: args.imdbID })
        },
        movieSmalls: async() => {
            return MovieSmall.find()
        }


    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user)

            return { token, user }
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('friends');
            }
            throw AuthenticationError;
        },
        addMovie: async (parent, { _id, title }) => {
            const movie = await Movie.findOne({ title });

            if (!movie) {
                console.alert('No such movie title. Please try again')
            }

            return movie
        },
        deleteMovie: async (parent, { _id }) => {
            const deleteMovie = await Movie.findOneAndDelete({ _id });

            if (!deleteMovie) {
                console.alert('Movie was not removed from your list')
            }

        },
        addMovieSmall: async (parent, {imdbID}) => {
            return MovieSmall.create({ imdbID });
        },

        likeMovie: async(parent, {email, imdbID}) => {
            const like = await User.findOneAndUpdate(
                {email: email},
                { $addToSet: { likedMovies: imdbID } },
            );

            if (!like) {
                return res.status(404).json({ message: 'Cannot like movie!' });
            }
            return { email }
        },

// Needs to take in user ID rather than friends ID
        addFriend: async (parent, { id, friendId }) => {
            return await User.findOneAndUpdate(
                { userId: id },
                { $addToSet: { friends: friendId} },
                { runValidators: true, new: true }
            );

        },
        deleteFriend: async (parent, { username }, context) => {
            const user = await User.findOneAndDelete(
                { username: username },
                { $pull: { friends: { friends: context.user._id } } },
                { runValidators: true, new: true }
            );

            const removeFriend = await User.findOneAndUpdate(
                { _id: _id },
                { $addToSet: { friends: user._id } },
                { runValidators: true, new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' });
            }

            return { user }
        }
    },
}

module.exports = resolvers

//do we need update/remove user?
//how do we handle adding friends?
//what queries do we really need? Find a single user to login, search for friends to add to friend list, search for media by title, delete friend, delete media from array
//how to we assign movies to a user? (no entry, just ID#)

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