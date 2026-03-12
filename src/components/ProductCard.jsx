function ProductCard({ product, onEdit, onDelete }) {

  const ratingValue =
    typeof product.rating === "number"
      ? product.rating
      : product.rating?.rate || 0;

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

      {/* Rating */}
      <div className="flex items-center mb-3">
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            className={
              star <= ratingValue
                ? "text-yellow-400 text-lg"
                : "text-gray-300 text-lg"
            }
          >
            ★
          </span>
        ))}
      </div>

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