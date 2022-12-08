import React from "react";
import RoomAndSuite from "./RoomAndSuite/RoomAndSuite";
import CheckRates from "./Shared/CheckRates/CheckRates";
import Hero from "./Shared/Hero/Hero";
import Services from "./Shared/Services/Services";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <div className="flex justify-center">
        <CheckRates></CheckRates>
      </div>
      <Services />
      <RoomAndSuite></RoomAndSuite>
    </div>
  );
};

export default Home;
