import React from 'react'

const SmallText = ({label}) => {
  return (
    <div className='w-fit flex gap-1 items-center justify-center mb-[8px]'>
        <div className='w-[2px] h-[10px] bg-[#c7c7c780]' />
        <p className='graySmText'>
          {label}
        </p>
    </div>
  )
}

export default SmallText