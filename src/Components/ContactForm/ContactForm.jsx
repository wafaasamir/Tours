import React from 'react';

function ContactForm() {
  return (
    <form id="contact-form" className="contact-form">
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="First Name: "
            className="w-100 p-3 rounded"
            id="first-name"
            name="first-name"
          />
          <div id="first-name-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="Last Name: "
            className="w-100 p-3 rounded"
            id="last-name"
            name="last-name"
          />
          <div id="last-name-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="Email Address: "
            className="w-100 p-3 rounded"
            name="email"
            id="email"
          />
          <div id="email-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="tel"
            placeholder="Phone: "
            className="w-100 p-3 rounded"
            name="phone"
            id="phone"
          />
          <div id="phone-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            placeholder="Subject: "
            className="w-100 p-3 rounded"
            id="subject"
            name="subject"
          />
          <div id="subject-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
        <div className="col-12 mb-3">
          <textarea
            name="message"
            id="message"
            placeholder="Write a message..."
            className="w-100 p-3 rounded"
            rows="5"
          ></textarea>
          <div id="message-error-message" className="error text-danger mt-2 ps-2"></div>
        </div>
      </div>
      <button type="submit" className="btn send-message-btn py-4 px-5 mb-5">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
