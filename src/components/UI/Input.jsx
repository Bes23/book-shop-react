import React from 'react'


const Input = (props) => {
  return (
    <input
      className='md:w-[225px] h-[40px] outline-none border-2 border-[#fff] indent-2.5 text-[#fff] text-[1.2em] font-bold rounded-md mt-3 bg-transparent'
      {...props}
    />
  )
}

export default Input
