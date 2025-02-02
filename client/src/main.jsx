
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client"
import { router } from './routes/Routes.jsx'
import {  RouterProvider } from 'react-router'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)