import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import user from '../assets/icons/user.png'
import { Button } from './index'

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false)

  return (
    <div
      className='w-[32px] h-[32px] relative mx-2 cursor-pointer sm:hidden'
      onClick={() => setOpen(!open)}
    >
      <img src={user} alt='user icon' className='w-full h-full' />
      <div
        className={`absolute h-max w-max bg-primary font-book font-bold px-3 py-2 z-50 rounded-md border-2 border-white right-4 ${
          open ? 'flex flex-col' : 'hidden'
        }`}
      >
        {!currentUser ? (
          <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </>
        ) : (
          <Button custyomStyle={'border-none'}>Logout</Button>
        )}
      </div>
    </div>
  )
}

export default UserProfile
