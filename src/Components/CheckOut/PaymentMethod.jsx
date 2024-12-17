import React from 'react';
import '../../styles/checkout.css'

function PaymentMethod({ name }) {
  return (
    <div className="d-flex justify-content-between py-3">
      <p className="fw-semibold">{name}</p>
      <p className="fw-semibold">+</p>
    </div>
  );
}

export default PaymentMethod;
