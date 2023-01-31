import React from 'react'

const IconButton = ({ icon, text, onClick, customStyle }) => {
  return (
    <div className='group'>
      <button
        className={`w-[35px] h-[35px] group-hover:scale-110 transition-all duration-300 ease-in ${customStyle}`}
        onClick={onClick}
      >
        <img src={icon} alt='icon' className='w-full h-full' />
      </button>
      <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in'>
        <span className='text-[.7rem]'>{text}</span>
      </div>
    </div>
  )
}

export default IconButton
