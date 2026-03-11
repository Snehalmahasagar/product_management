function FilterBar({ category, setCategory }) {

  return (

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2 rounded-lg"
    >

      <option value="All">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Accessories</option>
      <option value="men's clothing">Men Clothing</option>
      <option value="women's clothing">Women Clothing</option>

    </select>

  )
}

export default FilterBar