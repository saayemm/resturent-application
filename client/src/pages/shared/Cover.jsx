import React from 'react'

const Cover = ({img, heading, subheading}) => {
  return (
    <div className='p-20 flex justify-center items-center min-h-[400px] bg-fixed mb-8' style={{backgroundImage: `url("${img}")`}}>
        <div className='bg-[#15151566] flex justify-center items-center p-12 w-4/5 flex-col gap-4 text-white'>
            <h4 className='text-3xl font-bold text-center'>{heading}</h4>
            <p className='text-center'>{subheading}</p>
        </div>
    </div>
  )
}

export default Cover