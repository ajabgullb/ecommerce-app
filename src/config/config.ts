import axios from "axios"

const productsAPI = String(import.meta.env.VITE_PRODUCT_API_URL)

export const fetchProducts = async () => {
  const response = await axios.get(productsAPI)
  .then(res => res.data)
  .catch(err => console.error(err))

  if (response.data || response.data.data) {
    return response.data.data
  }
}

