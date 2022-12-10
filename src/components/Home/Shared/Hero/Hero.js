import React from "react";
import Icons from "../Icons/Icons";
import "./Hero.css";
import {
  faEnvelopeOpen,
  faWineGlassEmpty,
  faBeerMugEmpty,
} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="hero w-full   lg:bg-cover bg-no-repeat relative h-screen ">
      <h1 className="text-white  py-10 gap-2 flex justify-center absolute top-[35%] text-4xl text-start lg:text-7xl">
        Welcome <span className="satisfy text-8xl  text-orange-500">to</span>
        Hotello
      </h1>
      <div className="lg:flex md:flex hidden  lg:text-6xl  z-10 text-white gap-52  justify-center  absolute bottom-48">
        <Icons name="DRINKS" icon={faWineGlassEmpty}></Icons>
        <Icons name="EVENTS" icon={faEnvelopeOpen}></Icons>
        <Icons name="GYM" icon={faBeerMugEmpty}></Icons>
      </div>
    </div>
  );
};

export default Hero;
