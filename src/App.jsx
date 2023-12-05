import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
