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

type Friend {
    _id: ID!
    username: String!
    movies: [Movie]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(username: String!): User
    movies(username: String): [Movie]

}

type Mutation {
    addUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(movieId: ID!, title: String!): Movie
    removeMove(movieID: ID!): Movie
    addFriend(friendId: ID!, username: String!): Friend
    removeFriend(friendId: ID!): Friend
}`



module.exports = typeDefs;