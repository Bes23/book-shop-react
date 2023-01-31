import React from 'react'
import { useLocation } from 'react-router-dom'
import { CategoriesNavigation, Footer, Header, Products } from '../components'
const Home = () => {
  const location = useLocation()
  const categories = location.pathname.split('/')[2]
  return (
    <div>
      <Header />
      <div className='w-full grid grid-cols-[1fr,_3fr] gap-5'>
        <CategoriesNavigation categories={categories} />
        <Products categories={categories} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
