import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import ToursGrid from '../pages/ToursGrid.jsx';
import TourDetails from "../pages/TourDetails.jsx";
import ScrollToTop from "../utils/ScrollToTop.js";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<ToursGrid />} />
        <Route path="/tour-details/:tourId" element={<TourDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
