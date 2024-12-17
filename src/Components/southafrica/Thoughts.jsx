import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/southafrica.css";
import client1 from "../../assets/images/southafrica/destination-details/client-1-1.webp";
import client2 from "../../assets/images/southafrica/destination-details/client-1-2.webp";

function Thoughts() {
  return (
    <>
      <div className="thoughts">
        <h2 className="mb-5">
          2 thoughts on <q>South Africa</q>
        </h2>
        <div className="card mb-4">
          <div className="p-4">
            <div className="d-flex gap-5">
              <div className="d-flex half-width">
                <img src={client1} alt="" className="clint" />
                <p className="mx-2 fw-medium lh-1">Jenny Wilson</p>
                <span className="span-text date-color">March 8, 2020</span>
              </div>
              <div className="d-flex half-width justify-content-evenly">
                <span className="span-text">Was this review helpful?</span>
                <div className="d-flex gap-2 lh-1">
                  <div className="d-flex flex-column gap-1">
                    {/* <i className="fa-regular fa-thumbs-up"></i> */}
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="span-text">7</span>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    {/* <i className="fa-regular fa-thumbs-down text-body-tertiary fa-flip-horizontal"></i> */}
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <span className="span-text">3</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              volutpat diam ut venenatis tellus in metus. Sem et tortor
              consequat id porta. Et malesuada fames ac turpis egestas
            </p>
          </div>
        </div>
        <div className="card">
          <div className="p-4">
            <div className="d-flex gap-5">
              <div className="d-flex half-width">
                <img src={client2} alt="" className="clint" />
                <p className="mx-2 fw-medium lh-1">Katy Perry</p>
                <span className="span-text date-color">January 21, 2022</span>
              </div>
              <div className="d-flex half-width justify-content-evenly">
                <span className="span-text">Was this review helpful?</span>
                <div className="d-flex gap-2 lh-1">
                  <div className="d-flex flex-column gap-1">
                    {/* <i className="fa-regular fa-thumbs-up"></i> */}
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="span-text">7</span>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    {/* <i className="fa-regular fa-thumbs-down text-body-tertiary fa-flip-horizontal"></i> */}
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <span className="span-text">3</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              volutpat diam ut venenatis tellus in metus. Sem et tortor
              consequat id porta. Et malesuada fames ac turpis egestas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thoughts;
