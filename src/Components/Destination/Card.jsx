import React from "react";
import '../../styles/destination.css'

const Card = ({ imgSrc, tours, title, departures }) => {
  return (
    <div className="card m-3 col-xl-4 col-md-4 col-sm-12">
      <img src={imgSrc} alt={title} />
      <div className="card-overlay">
        <span className="tour-num">{tours} tours</span>
        <div className="card-desc">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{departures} Departures</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
