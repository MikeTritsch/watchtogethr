const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
friends: [User]
movies: [Movie]
}

type Movie {
    _id: ID!
    title: String!
    director: String!
    actors: String
    year: Int!
    whereAvailable: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]!
    user(username: String!): User
    movies(username: String): [Movie]


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