import React from 'react'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactInfo from '../Components/ContactInfo/ContactInfo'
import Map from '../Components/Map/Map'
import Newsletter from '../shared/newsletter/Newsletter'

function ContactPage() {
  return (
    <main>
      <Breadcrumb title = "contact us" buttonText="Contact"/>
      <section className="container mt-5">
        <div className="row my-5">
          <div className="col-md-6 me-5">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
        <Map />
      </section>
      <Newsletter />
    </main>
  )
}

export default ContactPage
