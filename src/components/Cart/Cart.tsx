import { useSelector, useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { removefromCart as removeCartSlice } from "@/store/features/slices/cartSlice"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ICartProduct {
  id: number
  name: string
  price: number
  thumbnail: string
  description: string
}

interface ICartState {
  state: Object
  cart: { cartData: any[] }
}

export default function Cart() {
  let cartItems = useSelector((state: ICartState) => state.cart.cartData)
  console.log(cartItems)
  const dispatch = useDispatch()

  // Remove from cart functionality
  const removeFromCart = (id: ICartProduct["id"]) => {
    cartItems = cartItems.filter((cartItem) => cartItem.id !== id)
    dispatch(removeCartSlice(cartItems))
    console.log(cartItems)
  }

  return (
    <div>
      {cartItems.map((cartItem: ICartProduct) => (
        <Card key={cartItem.id} className="w-2xl flex flex-row gap-0 my-4">
          <div className="w-[30%]">
            <CardHeader>
              <img 
                src={cartItem.thumbnail}
                className="rounded-2xl"
              />
            </CardHeader>
          </div>

          <div>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>{cartItem.name}</CardTitle>
              <CardDescription>{cartItem.description}</CardDescription>
              <p className="font-bold mt-4">Price: ${cartItem.price}</p>
            </CardContent>

            <CardFooter>
              <Button 
              variant={"destructive"} 
              className="cursor-pointer ml-60 mt-0"
              onClick={() => removeFromCart(cartItem.id)}
              >
                Remove from Cart
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  )
}

