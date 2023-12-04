const express = require('express');
const { ApolloServer } = require()


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
    await server.start();
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    app.use('/graphql', expressMiddleware(server));
  
  
  
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  };
  
  startApolloServer();