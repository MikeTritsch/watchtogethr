const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
friends: Array
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
    users: [User]!
    user(username: String!): User
    movies(username: String): [Movie]

}

type Mutation {
    addUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
}`



module.exports = typeDefs;