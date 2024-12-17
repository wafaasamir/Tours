import React from 'react';
import PaymentMethod from './PaymentMethod';
import '../../styles/checkout.css'
import { Link } from 'react-router-dom';

function CheckoutForm() {
  return (
    <section className="form-section">
      <div className="container mx-auto">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <div className="payment p-4">
              <div className="d-flex justify-content-between pb-4 fw-bold">
                <p>Direct Bank Transfer</p>
                <p>-</p>
              </div>
              <div className="form-container mb-5 pb-4">
                <form>
                  <label htmlFor="name" className="form-label fw-semibold">Name On Card</label>
                  <input type="text" id="name" className="form-control input-style mb-3" />

                  <label htmlFor="card-number" className="form-label fw-semibold">Card Number</label>
                  <input type="text" id="card-number" className="form-control input-style mb-3" />

                  <div className="row justify-content-between">
                    <div className="col-md-3">
                      <label htmlFor="month" className="form-label fw-semibold">Month</label>
                      <select id="month" className="form-control input-style">
                        <option>Month...</option>
                        {/* Months options */}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="year" className="form-label fw-semibold">Year</label>
                      <select id="year" className="form-control">
                        <option>Year...</option>
                        {/* Year options */}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="Cvv" className="form-label fw-semibold">Cvv</label>
                      <input type="text" id="Cvv" className="form-control" />
                    </div>
                  </div>
                </form>
              </div>
              <hr />
              <PaymentMethod name="Cheque Payment" />
              <PaymentMethod name="PayPal" />
              <hr />
              <button className="btn it-btn-primary py-3 px-5 mt-3" type="submit">Place Order</button>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="booking-card">
              <div className="booking-card-text text-center my-5 py-3">
                <h1 className="fw-bold pb-3 mb-3">You haven't booked any package Yet!</h1>
                <p className="text-muted mb-4">
                  But it doesn't have to stay that way. Browse our tour packages and find something you love!
                </p>
                <Link className="btn" to={"/tours"}>Back To Tour</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;
