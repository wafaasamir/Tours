import React from "react";
import"../../styles/whychooseus.css";
import mainImageUrl  from "../../assets/images/homepage/choose-thumb.jpg";
const WhyChooseUs = () => {
  
  
  

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <p className="subheading">Why Choose Us</p>
        <h2>Why you should choose our company</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="why-choose-us-features">
          <div className="feature-item">
            <span className="icon">🛠️</span>
            <p>
              <strong>Professional & Certified</strong>
            </p>
          </div>
          <div className="feature-item">
            <span className="icon">🏠</span>
            <p>
              <strong>Get Instant Tour Bookings</strong>
            </p>
          </div>
        </div>
        <button className="discover-more">Discover More</button>
      </div>
      <div className="image-container">
        <img
          src={mainImageUrl}
          alt="Beautiful landscape"
          className="main-image"
        />
        <div className="stats-box">
          <p className="stats-value">3,500+</p>
          <p className="stats-description">satisfied customers</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
