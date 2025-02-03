import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItem from '../../shared/MenuItem'
import UseMenu from '../../../hooks/UseMenu'

const PopularMenu = () => {

  const  [menu] = UseMenu();
  const popular = menu.filter(item=> item.category==='popular')
  return (
    <div className='mb-20'>
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
        <div className='grid lg:grid-cols-2 mb-4'>
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className='flex justify-center items-center mb-8'>
            <button className='border-b-2 uppercase font-medium
             border-b-gray-800 rounded-2xl px-8 py-2 cursor-pointer'>View Full Menu</button>
        </div>
    </div>
  )
}

export default PopularMenu