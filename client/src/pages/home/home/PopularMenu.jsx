import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItem from '../../shared/MenuItem'

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularMenu = data.filter(item=>item.category==='popular')
            setMenu(popularMenu)
        })
    },[])
  return (
    <div className='mb-20'>
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
        <div className='grid lg:grid-cols-2 mb-4'>
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
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