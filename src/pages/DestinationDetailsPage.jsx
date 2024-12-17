import React from "react";
import Explore from "../Components/southafrica/Explore";
import Location from "../Components/southafrica/Location";
import Thoughts from "../Components/southafrica/Thoughts";
import CommentsForm from "../Components/southafrica/CommentsForm";
import SearchForm from "../Components/southafrica/SearchForm";
import RecentTours from "../Components/southafrica/RecentTours";
import "../styles/southafrica.css";

function DestinationDetails() {
  return (
    <>
      <section>
        <div className="container d-flex flex-wrap col-sm-12">
          <section className="pt-5 explore-section col-lg-7 col-sm-12">
            <Explore />
            <Location />
            <Thoughts />
            <CommentsForm />
          </section>
          <section className="mt-5 col-sm-12 mx-sm-0 col-lg-4 mx-md-0 mx-lg-4">
            <SearchForm />
            <RecentTours />
          </section>
        </div>
      </section>
    </>
  );
}

export default DestinationDetails;
