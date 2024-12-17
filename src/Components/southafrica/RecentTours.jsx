import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../styles/southafrica.css";
import parasailing from "../../assets/images/southafrica/destination-details/parasailing.webp";
import sigtSeeing from "../../assets/images/southafrica/destination-details/Sigt-seeing.webp";
import peninsulaCaribben from "../../assets/images/southafrica/destination-details/Peninsula-Caribben.webp";

function RecentTours() {
  return (
    <>
      <div className="mt-5 recent-tours-background recent-tours">
        <h2 className="text-center first-color p-2 rounded-top-2 fs-3 main-color">
          Recent Tours
        </h2>
        <div className="d-flex mx-4 gap-4 my-4">
          <img className="img-styls" src={parasailing} alt="" />
          <div>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
            </div>
            <a className="text-decoration-none" href="">
              Beautiful parasailing
            </a>
            <p className="p-color mt-1">
              From <span className="span-color">$145</span>
            </p>
          </div>
        </div>
        <div className="d-flex mx-4 gap-4 my-4">
          <img className="img-styls" src={sigtSeeing} alt="" />
          <div>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
            </div>
            <a className="text-decoration-none " href="">
              Sight seeing & taj Mahal..
            </a>
            <p className="p-color mt-1">
              From <span className="span-color">$171</span>
            </p>
          </div>
        </div>
        <div className="d-flex mx-4 gap-4 my-4 pb-4">
          <img className="img-styls" src={peninsulaCaribben} alt="" />
          <div>
            <div className="icons">
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
            </div>
            <a className="text-decoration-none" href="">
              Peninsula & Caribbean..
            </a>
            <p className="p-color mt-1">
              From <span className="span-color"> $133</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentTours;
