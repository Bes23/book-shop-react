import React from 'react'

const Button = ({ children, onClick, custyomStyle }) => {
  return (
    <button
      className={`w-[135px] h-[40px] text-[1.2rem] text-white font-book font-semibold bg-primary border-2 border-white rounded-md ${custyomStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
