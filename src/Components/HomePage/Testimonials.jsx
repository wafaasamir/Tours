import React from "react";
import "../../styles/testimonials.css";
import mapImage from "../../assets/images/homepage/maps.png";
import avatar1 from "../../assets/images/homepage/avater-1.png";
import avatar2 from "../../assets/images/homepage/avater-2.png";
import avatar3 from "../../assets/images/homepage/avater-3.png";
import treeDecorative from "../../assets/images/homepage/tree.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <img src={mapImage} alt="Map Illustration" className="decorative-map" />
      <div className="container">
        <h2 className="section-title">
          <span>testimonials</span>
          <br />
          What Our Users Say
        </h2>
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. enim ad
              minim veniam, quis nostrud"
            </p>
            <div className="user-info">
              <img src={avatar1} alt="User 1" className="user-photo" />
              <div className="user-details">
                <h4 className="user-name">S. Swindell</h4>
                <span className="user-role">Web Developer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. enim ad
              minim veniam, quis nostrud"
            </p>
            <div className="user-info">
              <img src={avatar2} alt="User 2" className="user-photo" />
              <div className="user-details">
                <h4 className="user-name">Alan D. Rymer</h4>
                <span className="user-role">UI/UX Designer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. enim ad
              minim veniam, quis nostrud"
            </p>
            <div className="user-info">
              <img src={avatar3} alt="User 3" className="user-photo" />
              <div className="user-details">
                <h4 className="user-name">Dani Daniels</h4>
                <span className="user-role">SEO Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={treeDecorative}
        alt="Tree Illustration"
        className="decorative-tree"
      />
    </section>
  );
};

export default Testimonials;