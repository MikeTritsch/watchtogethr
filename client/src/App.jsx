import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import './App.css'

function App() {
  // const [loggedin, setIsLoggedIn] = useState(fasle);
  // This will changed depending on our back-end logic



  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
