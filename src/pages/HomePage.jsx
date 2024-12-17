import React from "react";
import HomePageHeader from "../Components/HomePage/HomePageHeader";
import TopDestinations from "../Components/HomePage/TopDestinations";
import AboutCompany from "../Components/HomePage/AboutCompany";
import FeaturedTours from "../Components/HomePage/FeaturedTours";
import TravelSection from "../Components/HomePage/TravelSection";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";
import SpecialOffer from "../Components/HomePage/SpecialOffer";
import Testimonials from "../Components/HomePage/Testimonials";
import BlogSection from "../Components/HomePage/BlogSection";

const Homepage = () => {
  return (
    <>
      <HomePageHeader />
      <TopDestinations />
      <AboutCompany />
      <FeaturedTours />
      <TravelSection />
      <WhyChooseUs />
      <SpecialOffer />
      <Testimonials />
      <BlogSection />
    </>
  );
};

export default Homepage;