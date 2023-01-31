import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.webp'
import { useDispatch, useSelector } from 'react-redux'
import Button from './UI/Button'
import { logout } from '../store/slices/authSlice'
import { UserProfile } from '.'

const Header = () => {
  const { currentUser } = useSelector((state) => state.auth)
  const { quantity } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className='h-[80px] px-5 bg-primary flex justify-between place-items-center text-white'>
      <Link to={'/'}>
        <div className='flex place-items-center'>
          <img src={logo} alt='logo' className='w-[80px]' />
          <h1 className='text-[1rem] px-3 capitalize'>explore world with us</h1>
        </div>
      </Link>
      <nav>
        <ul className='flex place-items-center'>
          <UserProfile />
          <Link to={'/cart'}>
            <Badge badgeContent={quantity}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>

          <div className='hidden sm:flex'>
            {!currentUser && (
              <>
                <Link to={'/register'} className='mx-5'>
                  Register
                </Link>
                <Link to={'/login'}>Login</Link>{' '}
              </>
            )}
            {currentUser && (
              <Button
                onClick={() => handleLogout()}
                custyomStyle={'border-none'}
              >
                Logout
              </Button>
            )}
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
