import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.find(
        (product) => product._id === action.payload._id
      )
      if (item) {
        alert('Already in cart')
        return
      }
      state.products.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      )
    },
    decreaseProduct: (state, action) => {
      state.products = state.products
        .map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity !== 0)
    },
    increaseProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },
    calculateTotal: (state) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          const itemTotal = price * quantity
          cartTotal.total += itemTotal
          cartTotal.quantity += quantity
          return cartTotal
        },
        { total: 0, quantity: 0 }
      )
      return { ...state, total, quantity }
    },
    clearCart: (state) => {
      state.products = []
      state.total = 0
      state.quantity = 0
    },
  },
})

export default cartSlice.reducer
export const {
  addProduct,
  removeProduct,
  decreaseProduct,
  increaseProduct,
  clearCart,
  calculateTotal,
} = cartSlice.actions
