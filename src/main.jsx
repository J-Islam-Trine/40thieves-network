import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//routes
import Home from './routes/home.jsx';
import Index from './routes/index.jsx';
import Login from './routes/login.jsx';
import SignUp from './routes/signUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path: '/login',
      element: <Login />
    },
    {
      index: true, element: <Index />
    },
    {
      path: '/sign-up',
      element: <SignUp />
    }
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
