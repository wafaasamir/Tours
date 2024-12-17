import React from "react";
import "../../styles/southafrica.css";
import CharmSouthAfrica from "../../assets/images/southafrica/destination-details/details-1-4.webp";
import discover2 from "../../assets/images/southafrica/destination-details/discover-2.webp";
import discover3 from "../../assets/images/southafrica/destination-details/discover-3.webp";

function Explore() {
  return (
    <>
      <div className="explore">
        <img
          src={CharmSouthAfrica}
          alt="Charm South Africa"
          className="Charm"
        />
        <h2 className="mt-4 mb-5 h-text-style">
          Explore the Beautiful Charm of South Africa
        </h2>
        <p className="fw-medium mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At
          volutpat diam ut venenatis tellus in metus. Sem et tortor consequat id
          porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae
          sapien pellentesque habitant morbi tristique senectus et. Cras semper
          auctor neque vitae. Turpis in eu mi bibendum neque. Pellentesque
          habitant morbi tristique senectus et netus. Ut morbi tincidunt augue
          interdum velit euismod. At in tellus integer feugiat scelerisque
          varius morbi.
        </p>
        <div className="d-flex flex-wrap justify-content-between j g-md-0 g-lg-0">
          <img src={discover2} alt="" className="discover-img" />
          <img src={discover3} alt="" className="discover-img" />
        </div>
        <p className="mt-5 fw-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At
          volutpat diam ut venenatis tellus in metus. Sem et tortor consequat id
          porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae
          sapien pellentesque habitant morbi tristique senectus et.
        </p>
      </div>
    </>
  );
}

export default Explore;
