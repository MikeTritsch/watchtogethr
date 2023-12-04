const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
password: String!
friends: Array
movies: Array
}`



module.exports = typeDefs;