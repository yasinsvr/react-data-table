function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        previous
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
