import React from 'react'
import '../styles/contact.css'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactInfo from '../Components/ContactInfo/ContactInfo'
import Map from '../Components/Map/Map'

function ContactPage() {
  return (
    <main>
      <Breadcrumb title = "contact us" buttonText="Contact"/>
    <section class="container mt-5">
      <div class="row my-5">
        <div class="col-md-6 me-5">
          <ContactForm />
        </div>
        <div class="col-md-4 company-contact rounded ms-md-5 p-4 h-75">
          <ContactInfo />
        </div>
      </div>
      <div>
        <Map />
      </div>
    </section>
    {/* news letter component */}
  </main>
  )
}

export default ContactPage
