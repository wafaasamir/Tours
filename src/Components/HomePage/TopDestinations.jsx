import React from "react";
import "../../styles/homedestination.css";


import balloonImage from "../../assets/images/homepage/ballon.png";
import starfishImage from "../../assets/images/homepage/star.png";

const destinations = [
  { img: "img-4.jpg", title: "Oceania", tours: 16 },
  { img: "img-3.jpg", title: "North America", tours: 20 },
  { img: "img-1.jpg", title: "South Africa", tours: 10 },
  { img: "img-2.jpg", title: "Europe", tours: 15 },
];

const TopDestinations = () => {
  return (
    <section className="top-destinations">
      <div className="decorative-images">
        {/* Using the imported images */}
        <img src={balloonImage} alt="Balloon" className="balloon" />
        <img src={starfishImage} alt="Starfish" className="starfish" />
      </div>
      <div className="section-content">
        <h3 className="section-subtitle">Top Destinations</h3>
        <h2 className="section-title">
          Explore the Beautiful Places Around the World
        </h2>
        <div className="destination-cards">
          {destinations.map((dest, idx) => (
            <div className="card" key={idx}>
              <img src={`./homepage/${dest.img}`} alt={dest.title} />
              <div className="card-content">
                <h4>{dest.title}</h4>
                <p>{dest.tours} Tours</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
