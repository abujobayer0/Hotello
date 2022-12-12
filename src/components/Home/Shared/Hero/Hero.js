import React from "react";
import Icons from "../Icons/Icons";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import {
  faEnvelopeOpen,
  faWineGlassEmpty,
  faBeerMugEmpty,
} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="hero w-full before:w-0 lg:before:w-[20%] lg:before:glass   lg:bg-cover bg-no-repeat relative h-screen ">
      <h1 className="text-white  py-10 gap-2 flex justify-center absolute top-[35%] text-4xl md:text-5xl text-start lg:text-7xl">
        Welcome <span className="satisfy text-8xl  text-orange-500">to</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Our Resort")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hotello")
              .start();
          }}
        />{" "}
      </h1>
      <div className="lg:flex md:flex hidden lg:flex-col  lg:absolute lg:bottom-0 lg:top-28 lg:right-4 lg:h-fit lg:text-6xl text-4xl z-10 text-white gap-52 lg:gap-12  justify-center  absolute bottom-48">
        <Icons name="DRINKS" icon={faWineGlassEmpty}></Icons>
        <Icons name="EVENTS" icon={faEnvelopeOpen}></Icons>
        <Icons name="GYM" icon={faBeerMugEmpty}></Icons>
      </div>
    </div>
  );
};

export default Hero;
