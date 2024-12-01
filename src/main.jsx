// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App/>
//    {/* <RouterProvider router={router} /> */}
//   </StrictMode>,
// )

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Layout from "./components/Layout.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Users from "./components/Users.jsx";
import Home from "./components/Home.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-chi-five.vercel.app/coffee')
      },
   
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-chi-five.vercel.app/coffee/${params.id}`)
  },
  {
    path: "signin",
    element: <SignIn></SignIn>
  },
  {
    path:"signup",
    element: <SignUp></SignUp>
  },
  {
    path: "users",
    element:<Users></Users>,
    loader: () => fetch('https://coffee-store-server-chi-five.vercel.app/users')
  }
]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
