import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {
  Cart,
  Home,
  Login,
  Product,
  ProductList,
  Register,
} from './pages/index'
import { calculateTotal } from './store/slices/cartSlice'

function App() {
  const { currentUser } = useSelector((state) => state.auth)
  const { products } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [products])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={currentUser ? <Home /> : <Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
