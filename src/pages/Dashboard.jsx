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
      category === "All" ? true : p.category === category
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

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
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
  )
}

export default Dashboard