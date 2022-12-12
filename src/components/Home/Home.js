import React from "react";
import RoomAndSuite from "./RoomAndSuite/RoomAndSuite";
import BookEarly from "./Shared/BookEarly/BookEarly";
import CheckRates from "./Shared/CheckRates/CheckRates";
import Hero from "./Shared/Hero/Hero";
import HotelloGallery from "./Shared/HotelloGallery/HotelloGallery";
import Review from "./Shared/Review/Review";
import Services from "./Shared/Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>

      <Services />
      <RoomAndSuite></RoomAndSuite>
      <WhyChoose></WhyChoose>
      <HotelloGallery></HotelloGallery>
      <Review></Review>
      <BookEarly></BookEarly>
    </div>
  );
};

export default Home;
