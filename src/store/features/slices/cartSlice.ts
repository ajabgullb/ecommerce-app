import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  product: Object
  id: number
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData = action.payload.id
    },
    removefromCart: (state, action) => {
      state.cartData = state.cartData.filter((product: ICart) => (
        product.id !== action.payload.id
      ))
    },
  }
})

export const {addToCart, removefromCart} = cartSlice.actions
export default cartSlice.reducer