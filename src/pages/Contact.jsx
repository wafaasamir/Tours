import React from 'react'
import '../styles/contact.css'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'

function ContactPage() {
  return (
    <main>
      <Breadcrumb title = "contact us" buttonText="Contact"/>
    <section class="container mt-5">
      <div class="row my-5">
        <div class="col-md-6 me-5">
          <form id="contact-form" class="contact-form">
            <div class="row">
              <div class="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="First Name: "
                  class="w-100 p-3 rounded"
                  id="first-name"
                  name="firs-name"
                />
                <div id="first-name-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
              <div class="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Last Name: "
                  class="w-100 p-3 rounded"
                  id="last-name"
                  name="last-name"
                />
                <div id="last-name-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
              <div class="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Email Address: "
                  class="w-100 p-3 rounded"
                  name="email"
                  id="email"
                />
                <div id="email-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
              <div class="col-md-6 mb-3">
                <input
                  type="tel"
                  placeholder="Phone: "
                  class="w-100 p-3 rounded"
                  name="phone"
                  id="phone"
                />
                <div id="phone-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
              <div class="col-12 mb-3">
                <input
                  type="text"
                  placeholder="Subject: "
                  class="w-100 p-3 rounded"
                  id="subject"
                  name="subject"
                />
                <div id="subject-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
              <div class="col-12 mb-3">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a message..."
                  class="w-100 p-3 rounded"
                  rows="5"
                ></textarea>
                <div id="message-error-message" class="error text-danger mt-2 ps-2"></div>
              </div>
            </div>
            <button type="submit" class="btn send-message-btn py-4 px-5 mb-5">
              Send Message
            </button>
          </form>
        </div>
        <div class="col-md-4 company-contact rounded ms-md-5 p-4 h-75">
          <div class="info-section d-flex align-items-start my-3">
            <div class="icon me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-clock p-2" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                  </svg>
            </div>
            <div>
              <h4 class="info-title mb-1">Hours</h4>
              <p class="info-details mb-0">
                Monday - Friday: 8 AM - 5:30 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
          <div class="info-section d-flex align-items-start my-3">
            <div class="icon me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-telephone p-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
            </div>
            <div>
              <h4 class="info-title mb-1">Call Us:</h4>
              <p class="info-details mb-0">
                Call Us: (+000) 987-3267<br />
                +88 568 956 238
              </p>
            </div>
          </div>
          <div class="info-section d-flex align-items-start my-3">
            <div class="icon me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-geo-alt p-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
            </div>
            <div>
              <h4 class="info-title mb-1">Location:</h4>
              <p class="info-details mb-0">
                242 Carlyle RdZebulon, North<br />
                Carolina(NC), 27597
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27344.668382416163!2d31.37257652169571!3d31.051773608655004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1733621683561!5m2!1sen!2seg"
            width="auto" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" class="map w-100 p-3" title='map'></iframe>
      </div>
    </section>
    {/* news letter component */}
  </main>
  )
}

export default ContactPage