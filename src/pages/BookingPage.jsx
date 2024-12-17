import React from "react";
import "../styles/booking.css";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";
import BookingSection from "../Components/BookingPage/BookingSection";
import Newsletter from "../shared/newsletter/Newsletter";

function BookingPage() {
  return (
    <>
      <Breadcrumb buttonText={"Tour"} title={"Booking Page"} />

      <BookingSection />
      <Newsletter />
    </>
  );
}

export default BookingPage;
