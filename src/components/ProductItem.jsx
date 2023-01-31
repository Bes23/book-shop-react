import { IconButton } from './index'
import React from 'react'
import search from '../assets/icons/search.png'
import addToCart from '../assets/icons/addToCart.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slices/cartSlice'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className='h-max flex flex-col place-items-center text-center'>
      <div className='max-w-full h-[250px] relative cursor-pointer mt-3 rounded-t-lg'>
        <img
          src={product.img}
          alt={product.title}
          className='w-full h-full object-[center_bottom] rounded-t-lg'
        />
        <div className='absolute inset-0 text-white rounded-t-lg font-semibold flex justify-evenly place-items-center bg-[#18183fe0] opacity-0 hover:opacity-100 transition-all duration-300 ease-linear'>
          <Link to={`/product/${product._id}`}>
            <IconButton
              icon={search}
              text='View Details'
              customStyle={'mx-4'}
            />
          </Link>
          <IconButton
            icon={addToCart}
            text='Add to Cart'
            onClick={() => dispatch(addProduct({ ...product, quantity: 1 }))}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='text-primary'>{product.title}</span>
        <span className='text-[#CD212A]'>${product.price}</span>
      </div>
    </div>
  )
}

export default ProductItem
