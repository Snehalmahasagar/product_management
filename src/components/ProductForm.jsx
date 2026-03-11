import { useState, useEffect } from "react"

function ProductForm({  onSubmit, selected, setShowForm  }) {

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: ""
  })

  useEffect(() => {
    if (selected) {
      setForm(selected)
    }
  }, [selected])

  const handleChange = (e) => {

    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    onSubmit(form)

    setForm({
      title: "",
      price: "",
      category: "",
      description: ""
    })
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-8 space-y-3"
    >

      <h2 className="text-xl font-semibold">
        {selected ? "Edit Product" : "Add Product"}
      </h2>

      <input
        name="title"
        placeholder="Product Name"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-3">

<button
type="submit"
className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
{selected ? "Update Product" : "Add Product"}
</button>

<button
type="button"
onClick={() => setShowForm(false)}
className="bg-gray-400 text-white px-4 py-2 rounded"
>
Cancel
</button>

</div>

      

    </form>
  )
}

export default ProductForm