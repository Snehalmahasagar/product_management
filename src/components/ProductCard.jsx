function ProductCard({ product, onEdit, onDelete }) {

  return (

    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

      <h3 className="font-semibold text-lg mb-2">
        {product.title}
      </h3>

      <p className="text-gray-600 mb-1">
        💰 ${product.price}
      </p>

      <p className="text-gray-600 mb-1">
        📦 {product.category}
      </p>

      <p className="text-yellow-500 mb-3">
        ⭐ {product.rating?.rate || "N/A"}
      </p>

      <div className="flex gap-3">

        <button
          onClick={() => onEdit(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default ProductCard