import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import ToursGrid from '../pages/ToursGrid.jsx';
import TourDetails from "../pages/TourDetails.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import Destination from "../pages/Destination.jsx"
import DestinationDetailsPage from "../pages/DestinationDetailsPage.jsx"
import ScrollToTop from "../utils/ScrollToTop.js";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destination-details" element={<DestinationDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<ToursGrid />} />
        <Route path="/tour-details/:tourId" element={<TourDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
