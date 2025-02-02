import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main