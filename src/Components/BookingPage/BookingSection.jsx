import React from "react";
import "../../styles/booking.css";
import { Link, useNavigate } from "react-router-dom";

const BookingSection = () => {
  const navigate = useNavigate();
  return (
    // Booking Section
    <section className="form-section">
      <div className="container mx-auto">
        <div className="row justify-content-center">
          {/* Booking Form */}
          <div className="col-lg-6">
            <div className="payment p-4">
              <div className="text-start pb-4 fw-bold">
                <p>Traveller Information</p>
              </div>
              <form>
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fw-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control input-style mb-3"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fw-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control input-style mb-3"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control input-style"
                      placeholder="Enter Email"
                    />
                    <p className="fw-light fs-6">
                      Booking confirmation will be sent to this email ID.
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label htmlFor="contact" className="form-label fw-semibold">
                      Contact Info
                    </label>
                    <input
                      type="number"
                      id="contact"
                      className="form-control input-style"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <p className="form-label fw-semibold">Special Request</p>
                    <textarea
                      id="textArea"
                      className="text-area w-100 h-75"
                      placeholder="E.G.. Early Check-In, Airport Transfer"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <p className="form-label fw-semibold">Have A Coupon Code?</p>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input-style"
                        placeholder="Promo Code"
                        aria-label="Promo Code"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary fw-semibold"
                        type="button"
                        id="button-addon2"
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 justify-content-end text-end">
                  <div className="col-md-3">
                    <Link className="btn pay-btn" to={"/booking-checkout"}>Pay Now</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Empty Booking Card */}
          <div className="col-lg-5">
            <div className="booking-card">
              <div className="booking-card-text text-center my-5 py-3">
                <h1 className="fw-bold pb-3 mb-3">You haven't booked any package yet!</h1>
                <p className="text-muted mb-4">
                  But it doesn't have to stay that way. Browse our tour packages and find something you love!
                </p>
                <button className="btn" onClick={() => navigate(-1)}>Back To Tour</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
