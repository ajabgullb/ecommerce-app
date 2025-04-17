import { createSlice } from "@reduxjs/toolkit";

interface ICartProduct {
  id: number
  name: string
  price: number
  thumbnail: string
  description: string
}

const initialState = {
  cartData: [
    {
      id: 1,
      name: "Zara's Perfume: High Quality Fragnance",
      thumbnail: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Perfume for Women",
      price: 50,
    },
  ]
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