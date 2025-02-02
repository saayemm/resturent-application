import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='flex justify-center'>
            <div className='bg-[#1F2937] flex flex-col gap-2 text-white p-12 w-1/2 items-center '>
                <h2 className='text-2xl font-semibold'>CONTACT US</h2>
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
            <div className='bg-[#111827] flex flex-col gap-2 text-white p-12 w-1/2 items-center'>
                <h2 className='text-2xl font-semibold'>Follow US</h2>
                <p>Join us on social media</p>
                <div className='flex gap-4 text-2xl items-center cursor-pointer'>
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                </div>

            </div>
        </div>
        <div className='flex justify-center items-center bg-gray-600 text-white p-2'>
            <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer