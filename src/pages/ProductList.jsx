import React from 'react'
import { useLocation } from 'react-router-dom'
import { CategoriesNavigation, Header, Products } from '../components'
const ProductList = () => {
  const location = useLocation()
  const categories = location.pathname.split('/')[2]
  return (
    <div className='grid h-screen'>
      <Header />
      <div className='grid grid-cols-[1fr,_3fr]'>
        <CategoriesNavigation />
        <Products categories={categories} />
      </div>
    </div>
  )
}

export default ProductList
