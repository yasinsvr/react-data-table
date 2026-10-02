function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  function getPages() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      "...",
      totalPages,
    ];
  }
  const pages = getPages();

  return (
    <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between border-t border-gray-300 px-5 py-4">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>Rows per page:</span>

        <select
          value={itemsPerPage}
          onChange={(e) => {
            onItemsPerPageChange(Number(e.target.value))
            onPageChange(1)
          }}
          className="rounded-lg border border-gray-700 bg-gray-800 px-2 py-1 text-gray-300 outline-none"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border cursor-pointer border-gray-300 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            previous
          </button>

          {pages.map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              );
            }
            return (
              <button
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition ${currentPage === page ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-700"}`}
                key={page}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            className="rounded-lg border cursor-pointer border-gray-300 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
