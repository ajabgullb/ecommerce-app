import { useEffect, useState } from "react"
import axios from "axios"
import { productsAPI } from "@/config/config"
import { Button } from "../ui/button"
import { useSelector, useDispatch } from "react-redux"
import { addToCart as addCartSlice } from "@/store/features/slices/cartSlice"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface IProduct {
  id: number
  title: string
  thumbnail: string
  description: string
}

interface ICartState {
  state: Object
  cart: { cartData: any[] }
}

export default function Products() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  let cartItems = useSelector((state: ICartState) => state.cart.cartData)

  const fetchProducts = async () => {
    const response = await axios.get(productsAPI)
    .then(res => res.data)
    .catch(err => console.error(err))

    if (response.data || response.data.data) {
      return response.data.data
    }
  }

  const addToCart = (id: IProduct["id"]) => {
    const cartProduct = products.map((product: IProduct) => {
      if (id === product.id) return product
    })

    cartItems = [cartProduct, ...cartItems]
    console.log(cartItems)
    dispatch(addCartSlice(cartItems))
  }

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchProducts()
      setProducts(res)
    }

    loadProducts()
  }, [products])

  return (
    <div className="w-full grid grid-cols-4 justify-center items-center">
      {products.map((product: IProduct) => (
        <Card key={product.id} className="max-w-80 m-2">
          <CardHeader>
            <div>
              <img src={product.thumbnail} alt="" />
            </div>
          </CardHeader>

          <CardContent>
          <CardTitle className="mb-3">{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <Button 
              variant={'outline'} 
              className="bg-orange-700 text-white cursor-pointer"
            >View the Product</Button>

            <Button 
              variant={'outline'} 
              className="bg-orange-700 text-white cursor-pointer"
              onClick={() => addToCart(product.id)}
            >Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

