import React from "react";
import "../../styles/aboutcompany.css"; 

// Import images
import mainImage from "../../assets/images/homepage/img-1 (1).jpg";
import smallImage1 from "../../assets/images/homepage/img-2.jpg";
import smallImage2 from "../../assets/images/homepage/img-3 (1).jpg";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-container">
        {/* Images Section */}
        <div className="about-images">
          <img src={mainImage} alt="Main" className="main-image" />
          <img
            src={smallImage1}
            alt="Small 1"
            className="small-image small-image-1"
          />
          <img
            src={smallImage2}
            alt="Small 2"
            className="small-image small-image-2"
          />
        </div>

        {/* Text Section */}
        <div className="about-content">
          <p className="about-subtitle">About Company</p>
          <h2 className="about-title">
            Sollicitudin Vestibulum Vulputate Ipsum.
          </h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>

          <div className="features">
            <div className="feature">
              <span className="feature-icon">🌍</span>
              <h3>Safety First Always</h3>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <h3>Nllamco laboris nisi</h3>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
          </div>

          <button className="about-btn">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
