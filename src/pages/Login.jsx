import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ErrorMessage, Input } from '../components'
import { login } from '../apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {error} = useSelector((state) => state.auth)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <div className='h-screen bg-primary flex justify-center place-items-center'>
      <form className='flex flex-col place-items-center'>
        <Input
          value={username}
          type='text'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          value={password}
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button custyomStyle={'mt-2'} onClick={handleLogin}>
          Login
        </Button>
        {error && <ErrorMessage customStyle='text-[red]'>Wrong Credentials!</ErrorMessage>}
        <div className='flex place-items-center mt-3'>
          <p className='text-white font-bold'>Do not have account?</p>
          <Link
            to={'/register'}
            className='text-[#56C6A9] text-[1.3rem] font-extrabold ml-3'
          >
            Create!
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
