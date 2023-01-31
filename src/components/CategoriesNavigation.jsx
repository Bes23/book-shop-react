import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoriesNavigation = () => {
  
  const categories = ['Classic', 'Fantasy', 'Detective', 'History', 'Biography']

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      backgroundColor: isActive ? 'black' : '',
    }
  }

  return (
    <div className='h-max w-full flex flex-col my-20 bg-primary border-primary text-white'>
      <h2 className='py-4 text-center bg-red border-2 border-red'>
        Categories
      </h2>
      <ul>
        <nav className='flex flex-col'>
          {categories.map((cat, index) => (
            <NavLink
              style={navLinkStyles}
              key={index}
              to={`/products/${cat}`}
              className={`border-y-2 border-[#fff] font-semibold text-[1em] font-book sm:text-[1.3em] px-3 py-5 capitalize`}
            >
              {cat}
            </NavLink>
          ))}
        </nav>
      </ul>
    </div>
  )
}

export default CategoriesNavigation
