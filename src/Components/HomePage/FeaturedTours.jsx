import React from "react";
import "../../styles/featuredtours.css";

// Import images
import secondImage3 from "../../assets/images/homepage/second (3).jpg";
import secondImage1 from "../../assets/images/homepage/second (1).jpg";
import secondImage2 from "../../assets/images/homepage/second (2).jpg";
import sunGlassIcon from "../../assets/images/homepage/sunGlass.png";
import bagIcon from "../../assets/images/homepage/bag.png";

const FeaturedTours = () => {
  const tours = [
    {
      image: secondImage3,
      title: "Cuba Sailing Adventure",
      location: "Traford Park Lexington",
      price: "$210.00",
      oldPrice: "$230.00",
      rating: "4.8",
      days: "5 days",
      people: "15 people",
      badge: "10% Off",
    },
    {
      image: secondImage1,
      title: "Tour in New York",
      location: "New York City",
      price: "$249.00",
      rating: "4.9",
      days: "7 days",
      people: "25 people",
      badge: "Featured",
    },
    {
      image: secondImage2,
      title: "Museum of Modern Art",
      location: "Alfred Avenue London",
      price: "$263.00",
      oldPrice: "$299.00",
      rating: "4.6",
      days: "3 days",
      people: "20 people",
      badge: "12% Off",
    },
  ];

  return (
    <section className="featured-tours">
      <div className="container">
        <div className="featured-tours-header">
          <img src={sunGlassIcon} alt="Sunglasses Icon" className="icon" />
          <h2>
            <span>Featured Tours</span>
            <br />
            Tours Packages
          </h2>
          <img src={bagIcon} alt="Luggage Icon" className="icon" />
        </div>

        <div className="cards">
          {tours.map((tour, index) => (
            <div key={index} className="card">
              <div className="image-container">
                <img src={tour.image} alt={tour.title} />
                <span
                  className={`badge ${
                    tour.badge === "Featured" ? "orange" : "green"
                  }`}
                >
                  {tour.badge}
                </span>
              </div>
              <div className="card-content">
                <h3>{tour.title}</h3>
                <p>
                  <span className="location">{tour.location}</span>
                </p>
                <p className="price">
                  From <strong>{tour.price}</strong>
                  {tour.oldPrice && (
                    <span className="old-price">{tour.oldPrice}</span>
                  )}
                </p>
                <p className="rating">⭐ {tour.rating} (1.6k reviews)</p>
                <p className="info">
                  <span>{tour.days}</span>
                  <span>{tour.people}</span>
                </p>
                <a href="#" className="button">
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
