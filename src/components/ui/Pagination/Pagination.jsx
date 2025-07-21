import "./Pagination.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="ins-pagination">
      <div
        className={`ins-pagination__imgContainer ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <img
          src="/insurance/assets/ui/arrow-left.svg"
          alt="قبلی"
          className="ins-pagination__imgContainer__prev"
        />
      </div>

      {pages.map((page) => (
        <button
          key={page}
          className={
            currentPage === page
              ? "ins-pagination__activePage"
              : "ins-pagination__page"
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <div
        className={`ins-pagination__imgContainer ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
      >
        <img
          src="/insurance/assets/ui/arrow-right.svg"
          alt="بعدی"
          className="ins-pagination__imgContainer__next"
        />
      </div>
    </div>
  );
};

export default Pagination;
