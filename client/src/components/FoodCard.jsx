import React from 'react'

const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item
  return (
    <div className='flex flex-col justify-between items-center gap-2 bg-amber-100 rounded-2xl overflow-hidden'>
        <img className='w-full' src={image} alt="" />
        <div className='p-8 flex flex-col items-center gap-4 justify-center'>
        <h4 className='text-2xl font-semibold'>{name}</h4>
        <p className='text-center'>{recipe}</p>
        <span className='text-3xl font-bold'>${price}</span>
        </div>
        <div className='flex justify-center items-center mb-8'>
            <button className='border-b-2 uppercase font-medium
             border-b-gray-800 bg-amber-400 rounded-2xl px-8 py-2 cursor-pointer'>Add to Cart</button>
        </div>
    </div>
  )
}

export default FoodCard