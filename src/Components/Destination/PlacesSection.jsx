import React from "react";
import Card from "./Card";
import '../../styles/destination.css'

const PlacesSection = () => {
  const destinations = [
    { imgSrc: "../../assets/images/destination/Angola.jpg", tours: 10, title: "Angola", departures: 120 },
    { imgSrc: "../../assets/images/destination/Switezerland.jpg", tours: 15, title: "Switezerland", departures: 80 },
    { imgSrc: "../../assets/images/destination/Ireland.jpg", tours: 25, title: "Ireland", departures: 105 },
    { imgSrc: "../../assets/images/destination/Alaska.jpg", tours: 5, title: "Alaska", departures: 95 },
    { imgSrc: "../../assets/images/destination/Montana.jpg", tours: 20, title: "Montana", departures: 115 },
    { imgSrc: "../../assets/images/destination/Kerala.jpg", tours: 25, title: "Kerala", departures: 115 },
  ];

  return (
    <section className="places my-5 py-5">
      <div className="container mx-auto">
        <div className="row justify-content-center cards">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              imgSrc={destination.imgSrc}
              tours={destination.tours}
              title={destination.title}
              departures={destination.departures}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
