import { createSlice } from "@reduxjs/toolkit";

interface ICartProduct {
  id: number
  title: string
  price: number
  thumbnail: string
  description: string
}

const initialState = {
  cartData: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData = action.payload
    },

    removefromCart: (state, action) => {
      state.cartData = action.payload
    },
  }
})

export const {addToCart, removefromCart} = cartSlice.actions
export default cartSlice.reducer