import React from 'react'
import './bradcrumb.css'
import breadcrumbImage from '../../assets/images/tours/breadcrumb.jpg'

function Breadcrumb({ title, buttonText }) {
  return (
    <section class="breadcrumb position-relative container-fluid p-0">
      <img
        src= {breadcrumbImage}
        alt="Can't Download Img"
        class="w-100 h-100"
      />
      <h1 class="position-absolute text-center text-uppercase">{title}</h1>
      <button type="button" class="btn position-absolute py-3 px-4">
        Home // {buttonText}
      </button>
    </section>
  )
}

export default Breadcrumb