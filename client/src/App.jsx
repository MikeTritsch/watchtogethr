import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import Header from './components/Header';
import './App.css'




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
