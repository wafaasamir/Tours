import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";
import ToursCards from "../features/tours/ToursCards";
import Pagination from "../Components/Pagination/Pagination";
import { fetchTours } from "../features/tours/toursSlice";
import Newsletter from "../shared/newsletter/Newsletter";

const ToursGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tours = useSelector((state) => state.toursData.tours);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const handleCardClick = (tourId) => {
    navigate(`/tour-details/${tourId}`);
  };

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
      <section className="mt-5 pt-4">
        <div className="container-md px-md-5">
          <ToursCards tours={currentTours} onCardClick={handleCardClick} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default ToursGrid;

