import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center mb-8 mt-8'>
        <p className='text-[#D99904] '>{subHeading}</p>
        <h3 className='uppercase text-4xl font-semibold border-y-2 border-gray-500 px-8 py-2'>{heading}</h3>
        
    </div>
  )
}

export default SectionTitle