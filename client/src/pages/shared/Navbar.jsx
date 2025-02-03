import React from 'react'
import logo from '../../assets/resLogo.png'
import { Link } from 'react-router'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-black p-4 fixed z-10 w-full'>
        <div>
            <img className='max-w-[160px]' src={logo} alt="" />
        </div>
        <div className='text-white flex gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Our Menu</Link>
            <Link to='/order'>Order Food</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Dashboard</Link>
        </div>

        <div className='flex gap-4 text-white text-xl items-center cursor-pointer'>
            <span><MdOutlineShoppingCart /></span>
            <Link>Login</Link>
            <span><CgProfile /></span>
        </div>
    </div>
  )
}

export default Navbar