import axios from "axios"

const API = axios.create({
  baseURL: "https://fakestoreapi.com"
})

export const getProducts = () => API.get("/products")

export const addProduct = (product) =>
  API.post("/products", product)

export const updateProduct = (id, product) =>
  API.put(`/products/${id}`, product)

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`)