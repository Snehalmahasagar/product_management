import { useState, useEffect } from "react"
import { getProducts } from "../services/api"

export default function useProducts() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await getProducts()
      setProducts(res.data)
    } catch (err) {
      setError("Failed to load products")
    } finally {
      setLoading(false)
    }
  }

  return { products, setProducts, loading, error }
}