import React from 'react'

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item
  return (
    <div className='flex gap-4 bg-amber-100 m-2 p-8 rounded-2xl items-center'>
        <img className='w-[160px] h-[100px] rounded-sm' src={image} alt="" />
       <div>
       <p className='text-2xl font-bold'>{name}</p>
       <p>{recipe}</p>
       </div>
        <p className='text-amber-500 text-2xl font-bold'>${price}</p>
    </div>
  )
}

export default MenuItem