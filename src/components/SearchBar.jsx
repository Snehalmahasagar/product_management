function SearchBar({ searchTerm, setSearchTerm }) {

  return (

    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

  )
}

export default SearchBar