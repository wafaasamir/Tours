import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from './LastDealsTours.module.css';
import { Link } from "react-router-dom";

function LastDealsTours() {
  const tours = useSelector((state) => state.toursData.tours);
  if (tours.length === 0) {
    return <p className={styles.noTours}>No tours available.</p>;
  }
  const lastThreeTours = tours.slice(-3);

  return (
    <div class={`${styles.lastDeals} rounded`}>
    <h4
      class={`${styles.toursDetailsPartTitle} p-3 text-center rounded-top text-white`}
    >
      Last Minute Deals
    </h4>
    <div class="container py-5">
      <div class="row">
      <div className={styles.lastDealsContainer}>
      {lastThreeTours.map((tour) => (
        <div key={tour.id} className={`${styles.tourCard} row mb-3`}>
          <div className="col-4">
            <img
              src={tour.img}
              alt={tour.name}
              className="img-fluid"
            />
          </div>
          <div className="col-8">
            <div className={`d-flex ${styles.lastDealsRate}`}>
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </span>
              ))}
            </div>
            <Link to={`/tour-details/${tour.id}`} className={styles.tourLink}>
                    <h6>{tour.name}</h6>
            </Link>
            <p>From <span className={styles.greenColor}>${tour.price}</span></p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  </div>
  );
}

export default LastDealsTours;
