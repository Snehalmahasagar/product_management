import { useState } from "react"
import useProducts from "../hooks/useProducts"
import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import Pagination from "../components/Pagination"

function Dashboard() {

  const { products, setProducts, loading, error } = useProducts()

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const perPage = 10

  const filtered = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
   .filter(p =>
 category === "All"
 ? true
 : p.category.toLowerCase() === category.toLowerCase()
)

  const start = (page - 1) * perPage
  const paginated = filtered.slice(start, start + perPage)

  const addOrUpdate = (product) => {

    if (selected) {

      setProducts(prev =>
        prev.map(p =>
          p.id === selected.id ? product : p
        )
      )

      setSelected(null)

    } else {

      product.id = Date.now()
      product.rating = {
  rate: 0,
  count: 0
}
      setProducts(prev => [product, ...prev])
    }

    setShowForm(false)
  }

  const deleteProduct = (id) => {

    if (!window.confirm("Delete product?")) return

    setProducts(prev =>
      prev.filter(p => p.id !== id)
    )
  }

  const handleEdit = (product) => {
    setSelected(product)
    setShowForm(true)
  }

  if (loading)
    return <p className="text-center mt-10">Loading...</p>

  if (error)
    return <p className="text-center text-red-500">{error}</p>

  return (

    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-10 px-4">
  <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8">

      {/* TITLE */}
   <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
  Product Management Dashboard
</h1>

      {/* SEARCH + FILTER + ADD BUTTON */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">

        <div className="flex flex-col sm:flex-row gap-3 flex-1">

          <SearchBar
            searchTerm={search}
            setSearchTerm={setSearch}
          />

          <FilterBar
            category={category}
            setCategory={setCategory}
          />

        </div>

        {/* ADD PRODUCT BUTTON */}
        <button
          onClick={() => {
            setSelected(null)
            setShowForm(!showForm)
          }}
          className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Add Product
        </button>

      </div>

      {/* PRODUCT FORM */}
      {showForm && (
        <ProductForm
          onSubmit={addOrUpdate}
          selected={selected}
          setShowForm={setShowForm}
        />
      )}

      {/* PRODUCT LIST */}
      <ProductList
        products={paginated}
        onEdit={handleEdit}
        onDelete={deleteProduct}
      />

      {/* PAGINATION */}
      <Pagination
        total={filtered.length}
        perPage={perPage}
        currentPage={page}
        setCurrentPage={setPage}
      />

    </div>
    </div>
  )
}

export default Dashboard