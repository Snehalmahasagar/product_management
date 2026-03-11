import ProductCard from "./ProductCard"

function ProductList({ products, onEdit, onDelete }) {

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No products found
      </p>
    )
  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map(product => (

        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </div>
  )
}

export default ProductList