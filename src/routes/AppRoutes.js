import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import ToursGrid from '../pages/ToursGrid.jsx';
import TourDetails from "../pages/TourDetails.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import Destination from "../pages/Destination.jsx"
import DestinationDetailsPage from "../pages/DestinationDetailsPage.jsx"
import BookingPage from "../pages/BookingPage.jsx";
import ScrollToTop from "../utils/ScrollToTop.js";
import Checkout from "../pages/Checkout.jsx";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-checkout" element={<Checkout />} />
        <Route path="/tours" element={<ToursGrid />} />
        <Route path="/tour-details/:tourId" element={<TourDetails />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destination-details" element={<DestinationDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
