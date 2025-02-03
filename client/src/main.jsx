
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client"
import { router } from './routes/Routes.jsx'
import {  RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
)