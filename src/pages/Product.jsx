import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../apiCalls'
import { Footer, Header, Button } from '../components'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../store/slices/cartSlice'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    getProduct(setProduct, id)
  }, [id])

  const handleQuantity = (type) => {
    switch (type) {
      case 'decrement':
        quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1)
        break
      case 'increment':
        setQuantity((prevQuantity) => prevQuantity + 1)
        break
      default:
    }
  }

  return (
    <div className='h-screen grid'>
      <Header />
      <div className='grid sm:grid-cols-[300px,_auto] gap-5 px-5 py-14 justify-center'>
        <div className='max-w-[300px] max-h-[300px]'>
          <img
            src={product.img}
            alt={product.title}
            className='w-full h-full object-[center_bottom]'
          />
        </div>
        <div>
          <div className='flex items-baseline'>
            <span className='font-bold'>Title:</span>
            <h2 className='text-[1.3rem] sm:text-[2rem] text-red font-book font-semibold pl-2'>
              {product.title}
            </h2>
          </div>
          <div className='flex items-baseline'>
            <span className='font-bold'>Author:</span>
            <h2 className='text-[1.3rem] md:text-[2rem] text-primary font-book font-semibold pl-2'>
              {product.author}
            </h2>
          </div>
          <div className='flex flex-col items-baseline mt-3'>
            <span className='font-bold'>Description:</span>
            <p className='text-[1rem] md:text-[1.5rem] font-book leading-7 max-w-[400px]'>
              {product.desc}
            </p>
          </div>
          <div className='flex place-items-center mt-3'>
            <Add onClick={() => handleQuantity('increment')} />
            <span>{quantity}</span>
            <Remove onClick={() => handleQuantity('decrement')} />
          </div>
          <Button
            custyomStyle={'mt-3'}
            onClick={() => dispatch(addProduct({ ...product, quantity }))}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
