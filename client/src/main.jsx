import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../src/index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Match from './pages/Match.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Friend from './pages/Friend.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Match',
        element: <Match />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Friend',
        element: <Friend />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
