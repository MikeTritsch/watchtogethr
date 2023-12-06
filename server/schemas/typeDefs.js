const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
movies: [Movie]
friends: [User]
}

type Movie {
    _id: ID!
    title: String!
    director: String!
    actors: String!
    year: Int!
    whereAvailable: String!
    plot: String!
    genre: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(id: ID!): User
    movies: [Movie]


}

type Mutation {
    createUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(movieId: ID!, title: String!): Movie
    deleteMovie(movieID: ID!): Movie
    addFriend(username: String!): User
    deleteFriend(friendId: ID!): User
    me: User
}`



module.exports = typeDefs;