import React from 'react'

const ErrorMessage = ({ children, customStyle }) => {
  return (
    <span className={`text-white text-[1rem] font-bold ${customStyle} my-2`}>
      {children}
    </span>
  )
}

export default ErrorMessage
