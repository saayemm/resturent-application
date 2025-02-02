import React from 'react'
import featuredImg from '../../../assets/featured.jpg'
import './Featured.css'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'

const Featured = () => {
  return (
    <div className='featured-sec bg-fixed p-20 text-white'>
        <div>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
        </div>
        <div className='flex gap-8 justify-center items-center text-white'>
            <img className='max-w-[500px] rounded-2xl' src={featuredImg} alt="" />
            <div className='max-w-[500px]'>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            </div>
        </div>
        <div className='flex justify-center items-center mb-8 mt-8'>
            <button className='border-b-2 uppercase font-medium
             border-b-gray-800 rounded-2xl px-8 py-2 cursor-pointer'>View Full Menu</button>
        </div>
    </div>
  )
}

export default Featured