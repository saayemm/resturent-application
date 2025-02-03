import React from 'react'
import MenuItem from '../shared/MenuItem'

const MenuCategory = ({item}) => {
  return (
    <div className='grid lg:grid-cols-2 mb-20'>
        {
             item.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
  )
}

export default MenuCategory