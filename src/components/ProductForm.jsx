import { useState, useEffect } from "react"

function ProductForm({ onSubmit, selected, setShowForm }) {

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    rating: 0,
    image: ""
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

  onSubmit({
    ...form,
    rating: {
      rate: form.rating,
      count: 0
    }
  })
}

  const handleImageUpload = (e) => {

  const file = e.target.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    setForm({
      ...form,
      image: reader.result
    })
  }

  reader.readAsDataURL(file)
}

  return (

    <div className="w-full flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-5 md:p-6 rounded-xl shadow space-y-4"
      >

        <h2 className="text-xl font-semibold text-center">
          {selected ? "Edit Product" : "Add Product"}
        </h2>

        <input
          name="title"
          placeholder="Product Name"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

      <select
 name="category"
 value={form.category}
 onChange={handleChange}
 className="w-full border p-2 rounded"
>

<option value="">Select Category</option>
<option value="electronics">Electronics</option>
<option value="jewelery">Accessories</option>
<option value="men's clothing">Men Clothing</option>
<option value="women's clothing">Women Clothing</option>

</select>

{/* Product rating */}

<div>
  <label className="block mb-1 font-medium">
    Product Rating
  </label>

  <div className="flex gap-1 text-2xl cursor-pointer">

    {[1,2,3,4,5].map((star) => (

      <span
        key={star}
        onClick={() =>
          setForm({ ...form, rating: star })
        }
        className={
          star <= form.rating
            ? "text-yellow-400"
            : "text-gray-300"
        }
      >
        ★
      </span>

    ))}

  </div>

</div>

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="3"
        />

        <div className="flex flex-col sm:flex-row gap-3">

          <button
            type="submit"
            className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            {selected ? "Update Product" : "Add Product"}
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="w-full sm:w-auto bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>

        </div>
        <div>
  <label className="block mb-1 font-medium">
    Product Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="w-full border p-2 rounded"
  />
    {/* IMAGE PREVIEW */}
  {form.image && (
    <img
      src={form.image}
      alt="preview"
      className="h-32 mt-3 object-contain border rounded"
    />
  )}
</div>

      </form>

    </div>
  )
}

export default ProductForm