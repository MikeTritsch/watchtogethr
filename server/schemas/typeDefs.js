const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
movies: [Movie]
friends: [User]
likedMovies: [String]
}

type Movie {
    _id: ID!
    Title: String!
    Director: String!
    Actors: String!
    Year: String!
    Plot: String!
    Genre: String!
    imdbID: String!
    Poster: String
}

type Auth {
    token: ID!
    user: User
}

type MovieSmall {
    imdbID: String!
}

type Query {
    me: User
    users: [User]
    user(id: ID, username: String): User
    movies(username: String): [Movie]
    movie(imdbID: String!): Movie
    movieSmalls: [MovieSmall]!
    findMovieByImdbID(imdbID: String!): Movie
    findUserByEmail(email: String!): User
}



type Mutation {
    createUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(movieId: ID!, title: String!): Movie
    deleteMovie(movieID: ID!): Movie
    addFriend(username: String!): User
    deleteFriend(friendId: ID!): User
    me: User
    addMovieSmall(imdbID: String): MovieSmall
    likeMovie(email: String!, _id: ID!): User
    createMovie(Actors: String!, Director: String!, Genre: String!, Plot: String!, Poster: String!, Title: String!, Year: String!, imdbID: String!): Movie
    
}`



module.exports = typeDefs;