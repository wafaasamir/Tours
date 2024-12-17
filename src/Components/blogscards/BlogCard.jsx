import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BLOG_STANDARD } from "../../network/blog";
import "../../styles/blog.css";

const imgStyle = {
  width: "100%",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
};

const typeStyle = {
  display: "inline-block",
  width: "90px",
  height: "35px",
  textAlign: "center",
  lineHeight: "2.4",
  backgroundColor: "#ff6525",
  color: "#fff",
  borderRadius: "3px",
  position: "relative",
  bottom: "55%",
  fontSize: "14px",
  left: "9%",
};

const cardStyle = {
  width: "335px",
  marginBlock: "5px",
};

function BlogCard() {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(BLOG_STANDARD.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = BLOG_STANDARD.slice(startIndex, endIndex);

    return (
      <div className="d-flex flex-wrap container justify-content-around gap-4">
        {paginatedData.map((item) => (
          <div className="card" key={item.id} style={cardStyle}>
            <img style={imgStyle} src={item.img} alt={item.name} />
            <div style={typeStyle}>{item.type}</div>
            <div
              className="d-flex justify-content-around mb-3"
              style={{ color: "#11bb67" }}
            >
              <div>
                {item.info.left.icon}
                <span className="mx-2" style={{ color: "#6b6f6a" }}>
                  {item.info.left.date}
                </span>
              </div>
              <div>
                {item.info.right.icon}
                <span className="mx-2" style={{ color: "#6b6f6a" }}>
                  {item.info.right.comments}
                </span>
              </div>
            </div>
            <Link
              className="description mx-3 fw-medium fs-6 text-decoration-none"
              style={{ cursor: "pointer", color: "black" }}
              to={`/blog/${item.id}`}
            >
              {item.description}
            </Link>
            <div className="d-flex mx-3 gap-2" style={{ color: "#11bb67" }}>
              <Link
                style={{ cursor: "pointer", color: "#11bb67" }}
                className="mb-3 text-decoration-none d-flex gap-2"
                to={item.link.href}
              >
                {item.link.text}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="fa-solid fa-arrow-right mt-2"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="d-flex flex-wrap container justify-content-between">
      <div id="cards-container" className="card-container">
        {renderCards()}
      </div>
      <div className="pagination container mx-5 p-3">
        {/* Pagination buttons */}
        <button
          className="btn-style"
          id="prev"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className={`btn-style mx-2 ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button
          className={`btn-style mx-2 ${currentPage === 2 ? "active" : ""}`}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button
          className="btn-style"
          id="next"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
