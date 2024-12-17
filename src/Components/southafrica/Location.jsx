import React from "react";
import "../../styles/southafrica.css";

function Location() {
  return (
    <>
      <div className="location mb-5">
        <h2 className="mb-4">Location</h2>
        <div className="map-hight">
          <iframe
            className="col-12"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121914.86196405679!2d-74.07886878452959!3d40.72084424392851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713501285528!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Location;
