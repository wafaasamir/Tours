import React, { useEffect, useState } from "react";
import TourCard from "../Components/TourGrid/TourCard";
import Pagination from "../Components/TourGrid/Pagination";
import "../styles/tour-grid.css";

const jsonFilePath = "/tours.json"; 
const itemsPerPage = 6;

function TourGrid() {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(jsonFilePath)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setTotalItems(jsonData.length);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentItems = data.slice(startIndex, endIndex);

    return currentItems.map((tour) => <TourCard key={tour.id} tour={tour} />);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  };

  return (
    <main>
      <section className="tour-grid-header position-relative container-fluid p-0">
        <img
          src="../assets/images/tours/breadcrumb.jpg" 
          alt="Can't Download Img"
          className="w-100 h-100"
        />
        <h1 className="position-absolute text-center text-uppercase">
          Tour Grid
        </h1>
        <button type="button" className="btn position-absolute py-3 px-4">
          Home // Grid
        </button>
      </section>
      <section className="tour-grid mt-5">
        <div className="container-md px-md-5">
          <div className="row m-md-5" id="cards-container">
            {renderCards()}
          </div>
          <div id="pagination" className="pagination mb-5 mx-2 px-md-5">
            {renderPagination()}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TourGrid;
