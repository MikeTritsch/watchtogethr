import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import Header from './components/Header';
import './App.css'



const client = new ApolloClient({
  
  cache: new InMemoryCache(),
});

function App() {
  // const [loggedin, setIsLoggedIn] = useState(fasle);
  // This will changed depending on our back-end logic



  return (
    <ApolloProvider client={client}>
    <Header />
    <Outlet />
    </ApolloProvider>
  )
}

export default App
