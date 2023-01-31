import React from 'react'
import { Add, Remove } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, Header, IconButton, Button } from '../components/index'
import remove from '../assets/icons/remove.png'
import {
  clearCart,
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from '../store/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart)
  const { currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckOut = () => {
    if (currentUser === null) {
      alert('You must be logged in')
      return
    }
    alert(`Thanks for purchase ${currentUser.username}`)
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <div className='h-screen grid grid-rows-[1fr,3fr,1fr]'>
      <Header />
      {products.length === 0 ? (
        <h1 className='text-[1.5rem] text-red font-semibold text-center capitalize'>
          your cart is empty
        </h1>
      ) : (
        <div className='py-5 md:p-5'>
          <table className='w-full h-[30px] border-collapse'>
            <thead>
              <tr>
                <th className='text-left bg-[#A2242F] text-white font-bold text-[1em] md:text-[1.3em] p-2'>
                  Product
                </th>
                <th className='text-left bg-[#A2242F] text-white font-bold text-[1em] md:text-[1.3em] p-2'>
                  Quantity
                </th>
                <th className='bg-[#A2242F] text-white font-bold md:text-[1.3em] text-[1em] md: p-2 text-right'>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className='p-3'>
                    <div className='sm:flex'>
                      <div className='w-[120px] rounded-t-lg h-[120px] flex'>
                        <img
                          src={product.img}
                          alt='cover'
                          className='w-full h-full rounded-t-lg'
                        />
                      </div>
                      <div className='ml-2 h-[80px] max-w-[300px] flex flex-col p-3'>
                        <span className='text-[0.8em] hidden sm:inline-flex'>
                          {product.title}
                        </span>
                        <span className='text-[0.8em] hidden sm:inline-flex py-2'>
                          {product.author}
                        </span>
                        <IconButton
                          icon={remove}
                          text={'Delete'}
                          onClick={() => dispatch(removeProduct(product))}
                          customStyle='w-[25px]'
                        />
                      </div>
                    </div>
                  </td>
                  <td className='p-3'>
                    <div className='flex place-items-center'>
                      <Remove
                        onClick={() => dispatch(decreaseProduct(product))}
                      />
                      <p className='w-[30px] h-[30px] flex justify-center place-items-center rounded-full border-2 border-[#34568B] mx-2'>
                        {product.quantity}
                      </p>
                      <Add onClick={() => dispatch(increaseProduct(product))} />
                    </div>
                  </td>
                  <td className='p-3 text-right'>
                    $ {product.price * product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex flex-col place-items-end'>
            <table className='w-full md:max-w-[350px] h-[140px] border-collapse'>
              <thead>
                <tr>
                  <td>Subtotal</td>
                  <td className='text-right'>$ {total}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className='text-right'>$ 5</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className='text-right'>$ {total + 5} </td>
                </tr>
              </thead>
            </table>
            <div className='place-items-center flex flex-col sm:flex-row'>
              <Button
                onClick={() => dispatch(clearCart())}
                custyomStyle={'bg-red'}
              >
                Clear Cart
              </Button>
              <Button onClick={handleCheckOut}>Checkout Now</Button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart
