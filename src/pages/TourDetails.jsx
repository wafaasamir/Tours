import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTourDetails } from "../features/tours/toursSlice";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";
import TourDetailsInfo from '../Components/TourDetails/TourDetailsInfo';
import Map from '../Components/Map/Map'
import TourInfoCard from '../Components/TourInfoCard/TourInfoCard'
import LastDealsTours from '../Components/LastDealsTours/LastDealsTours'
import BookingPackageForm from '../Components/BookinkgPackageForm/BookingPackageForm'
import Newsletter from "../shared/newsletter/Newsletter";

const TourDetails = () => {
  const { tourId } = useParams();
  const dispatch = useDispatch();
  const tourDetails = useSelector((state) => state.toursData.tourDetails);
  
  useEffect(() => {
    dispatch(fetchTourDetails(tourId));
  }, [dispatch, tourId]);

  if (!tourDetails) {
    return <p>No details available for this tour</p>;
  }
  
  return (
    <>
        <Breadcrumb title={tourDetails.name} buttonText={"Tour"}/>
        <section className="mt-5 pt-4">
        <div className="container-md p-md-5">
          <div className="row">
            <div className="col-md-8 tour-details-left">
              <TourDetailsInfo tourDetails={tourDetails}/>
              <div>
                <h3 className="fw-bold">Location</h3>
                <div>
                  <Map />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <BookingPackageForm />
                <TourInfoCard tourDetails={tourDetails.info} />
                <LastDealsTours />
              </div>
            </div>
          </div>
        </div>
        </section>
        <Newsletter />
    </>
  );
};

export default TourDetails;
