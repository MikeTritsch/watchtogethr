const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
movie: [Movie]
friends: [User]
}

type Movie {
    _id: ID!
    Title: String!
    Director: String!
    Actors: String!
    Year: Int!
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
}`



module.exports = typeDefs;