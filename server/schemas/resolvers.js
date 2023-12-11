
const { User, Movie, MovieSmall} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

//Queries for all users, all movies, an individual user, an individual movie, find movies by their IMDB id, and find users by email address. "me" query is critical for the friend functionalities.

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
        },


        findMovieByImdbID: async (parent, {imdbID}) => {
            return Movie.findOne({imdbID: imdbID})
        },


        findUserByEmail: async (parent, {email}) => {
            return User.findOne({email: email}).populate('movies')
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('friends');
            }
            throw AuthenticationError;
        }

//Mutations to add new user, login established user, add and remove movies from a personal list, and add and remove friends from a personal list.
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

        likeMovie: async(parent, {email, _id}) => {
            const like = await User.findOneAndUpdate(
                {email: email},
                { $addToSet: { movies: _id } },
            );

            if (!like) {
                return res.status(404).json({ message: 'Cannot like movie!' });
            }
            return { email }
        },


        createMovie: async (parent, { Actors, Director, Genre, Plot, Poster, Title, Year, imdbID }) => {
            reutrn = Movie.create({ Actors, Director, Genre, Plot, Poster, Title, Year, imdbID });

        },

        addFriend: async (parent, { addFriendId, friendId }) => {
            const user = await User.findOneAndUpdate(
                { _id: addFriendId },
                { $addToSet: { friends: friendId} },

                { runValidators: true, new: true }
            )
            console.log(user);
            return user.populate("friends");
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