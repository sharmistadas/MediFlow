export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="d-flex justify-content-center mt-3" aria-label="Pagination">
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onPageChange(page - 1)}>
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${pageNumber === page ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onPageChange(page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
