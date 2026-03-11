function Pagination({
  total,
  perPage,
  currentPage,
  setCurrentPage
}) {

  const pages = Math.ceil(total / perPage)

  const numbers = []

  for (let i = 1; i <= pages; i++) {
    numbers.push(i)
  }

  return (

    <div className="flex justify-center gap-2 mt-8">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {numbers.map(num => (

        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`px-3 py-1 rounded ${
            currentPage === num
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {num}
        </button>

      ))}

      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  )
}

export default Pagination