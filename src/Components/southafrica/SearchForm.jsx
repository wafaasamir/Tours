import React from "react";
import "../../styles/southafrica.css";

function SearchForm() {
  return (
    <>
      <div className="container p-4 search-section-border">
        <div className="container mb-5 pb-5 search-border">
          <h2 className="search-header-fs">Search Here</h2>
          <input
            type="text"
            className="search-input my-3 col-12 p-3"
            placeholder="Search Destination"
          />
          {/* <i class="fa-solid fa-magnifying-glass icon-style"></i> */}
        </div>
        <div className="container">
          <h2 className="search-header-fs">Contact for Booking</h2>
          <input
            type="text"
            className="search-input my-3 col-12 p-3"
            placeholder="Name"
          />
          <input
            type="email"
            className="search-input my-3 col-12 p-3"
            placeholder="Email"
          />
          <textarea
            placeholder="Type Comment Here "
            className="p-3 search-text-erea-style col-12"
          ></textarea>
          <button
            type="submit"
            className="btn-send first-color btn main-color col-12 mt-3 p-3"
          >
            Send Now
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
