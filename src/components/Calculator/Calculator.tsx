import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "../ui/button"

interface ICartProductDetails {
  price: number
}

interface ICartState {
  state: Object
  cart: { cartData: any[] }
  cartItem: ICartProductDetails
}

export default function Calculator() {
  const [numberOfProducts, setNumberOfProducts] = useState<number | null>(0)
  const [totalAmount, setTotalAmount] = useState<number | null>(0)
  const cartItems = useSelector((state: ICartState) => state.cart.cartData)

  const countingProducts = () => {
    const cartLength = cartItems.length
    setNumberOfProducts(cartLength)
  }

  const countingTotalAmount = () => {
    let finalPrice = 0
    cartItems.map((cartItem: ICartProductDetails) => (
      finalPrice += cartItem.price
    ))

    setTotalAmount(finalPrice)
  }

  useEffect(() => {
    countingProducts()
    countingTotalAmount()

  }, [numberOfProducts, totalAmount])

  return (
    <div className="w-full rounded-lg shadow-xl mx-2 my-3 p-2">
      <div className="flex gap-4 mt-2">
        <div className="py-3 mx-auto">
          Products: <span className="w-full bg-gray-400 px-4 mx-2 py-2 font-bold rounded">{numberOfProducts}</span>
        </div>
        <div className="py-3 mx-auto">
          Total Amount: <span className="w-full bg-gray-400 px-4 mx-2 py-2 font-bold rounded">${totalAmount}</span>
        </div>
      </div>

      <Button className="w-full mt-10 cursor-pointer">Checkout</Button>
    </div>
  )
}

