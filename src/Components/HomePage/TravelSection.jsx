import React from "react";
import "../../styles/travelsection.css"; 

const TravelSection = () => {
  return (
    <>
      <section className="travel-section">
        <div className="travel-overlay"></div>
        <div className="travel-header">
          <h2>Ready to get started your travel camping us</h2>
          <button className="start-booking">Start Booking</button>
        </div>
      </section>

      <section className="travel-stats">
        <div className="stat-item">
          <h2>835+</h2>
          <p>Total Donations</p>
        </div>
        <div className="stat-item">
          <h2>6,246+</h2>
          <p>Campaigns Closed</p>
        </div>
        <div className="stat-item">
          <h2>2,000+</h2>
          <p>Happy People</p>
        </div>
        <div className="stat-item">
          <h2>600+</h2>
          <p>Our Volunteers</p>
        </div>
      </section>
    </>
  );
};

export default TravelSection;
