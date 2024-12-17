import React from "react";
import"../../styles/specialoffer.css";
import treeImage from "../../assets/images/homepage/shape-small.png";
import countryImage from "../../assets/images/homepage/country.png";
import girlImage from "../../assets/images/homepage/girls.png";

const SpecialOffer = () => {
  return (
    <section className="special-offer">
      <div className="container">
        <div className="offer">
          <img src={treeImage} alt="Palm Tree" className="tree" />
          <div className="content">
            <h1 className="title">SPECIAL OFFER</h1>
            <h2 className="subtitle">TRAVEL THE WORLD</h2>
            <div className="discount-circle">
              <p>
                75% <br />
                off
              </p>
            </div>
            <button className="booking-button">Start Booking</button>
          </div>
          <img src={treeImage} alt="Palm Tree" className="tree2" />
          <img src={countryImage} alt="Country Sign" className="country-sign" />
          <img src={girlImage} alt="Girl" className="girl" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;