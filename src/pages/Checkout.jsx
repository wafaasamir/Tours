import React from 'react'
import '../styles/checkout.css'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'
import Newsletter from '../shared/newsletter/Newsletter'
import CheckoutForm from '../Components/CheckOut/CheckoutForm'

function Checkout() {
  return (
    <>
    <Breadcrumb buttonText={"Tour"} title={"Booking Checkout"}/>
      <CheckoutForm/>
      <Newsletter />
    </>
  )
}

export default Checkout