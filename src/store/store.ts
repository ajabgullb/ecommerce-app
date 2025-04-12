import { configureStore } from "@reduxjs/toolkit"
import { authSlice, cartSlice } from "./features/index"

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  }
})

export default store