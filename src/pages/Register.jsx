import React from 'react'
import { Button, ErrorMessage, Input } from '../components/index'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { publicRequest } from '../requestMethod'

const Register = () => {
  const navigate = useNavigate()

  const validate = Yup.object({
    firstname: Yup.string()
      .max(20, 'First name must be 20 characters or less')
      .required('Firstname is required'),
    lastname: Yup.string()
      .max(20, 'Last name must be 20 characters or less')
      .required('Last name is Required'),
    username: Yup.string()
      .min(4, 'Username must be at least 5 characters')
      .max(20, 'Username must be 20 characters or less')
      .required('Username is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 cahracters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password does not match')
      .required('Password confirmation is required'),
  })

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        await publicRequest.post('/auth/register', {
          firstname: values.firstname,
          lastname: values.lastname,
          username: values.username,
          email: values.email,
          password: values.password,
        })
        navigate('/login')
      } catch (error) {
        throw new Error('something went wrong')
      }
    },
  })

  return (
    <div className='min-h-screen bg-red flex flex-col justify-center place-items-center'>
      <h1 className='text-white text-[1.5rem] font-book font-semibold my-3'>
        Create Account
      </h1>
      <form className='flex flex-col place-items-center'>
        <Input
          type='text'
          placeholder='First Name'
          name='firstname'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <ErrorMessage>{formik.errors.firstname}</ErrorMessage>
        ) : null}
        <Input
          type='text'
          placeholder='Last Name'
          name='lastname'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <ErrorMessage>{formik.errors.lastname}</ErrorMessage>
        ) : null}
        <Input
          type='text'
          placeholder='Username'
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <ErrorMessage>{formik.errors.username}</ErrorMessage>
        ) : null}
        <Input
          type='email'
          placeholder='Email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
        ) : null}
        <Button
          custyomStyle={'bg-red my-3'}
          onClick={formik.handleSubmit}
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  )
}

export default Register
