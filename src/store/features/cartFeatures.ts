import { useDispatch, useSelector } from "react-redux"
import { addToCart as addCartSlice, removefromCart as removeCartSlice } from "./slices/cartSlice"

interface IProductDetails {
  name: string
  id: number
  price: number
  thumbnail: string
}

interface IProduct {
  product: IProductDetails
  id: number
}

interface ICart {
  state: Object
  cart: { cartData: any[] }
}

const dispatch = useDispatch()
let cartItems = useSelector((state: ICart) => state.cart.cartData)

// Add to cart functionality
export const addToCart = (product: IProduct, id: IProduct) => {
  if (product.id === id.id) {
    dispatch(addCartSlice(product))
  }
}

// Remove from cart functionality
export const removeFromCart = (id: IProduct) => {
  cartItems = cartItems.filter((cartItem) => (
    cartItem.id !== id.id
  ))

  dispatch(removeCartSlice(cartItems))
}

