import React from 'react';
// import "../../styles/tour-grid.css"
function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`btn mx-1 ${i === currentPage ? "active" : ""}`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination mb-5 mx-2 px-md-5">
      {pageButtons}
    </div>
  );
}

export default Pagination;
