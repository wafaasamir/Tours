import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";
import ToursCards from "../features/tours/ToursCards";
import Pagination from "../Components/Pagination/Pagination";
import { fetchTours } from "../features/tours/toursSlice";

const ToursGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tours = useSelector((state) => state.toursData.tours); // Adjust state path based on your Redux store
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch tours on component mount
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const handleCardClick = (tourId) => {
    navigate(`/tour-details/${tourId}`); // Navigate to details page with the tour ID
  };

  // Pagination logic
  const totalItems = tours.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentTours = tours.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <Breadcrumb title={"Tour Grid"} buttonText={"Grid"}/>
      {/* Cards and Pagination Section */}
      <section className="mt-5">
        <div className="container-md px-md-5">
          {/* Render Cards */}
          <ToursCards tours={currentTours} onCardClick={handleCardClick} />
          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default ToursGrid;

