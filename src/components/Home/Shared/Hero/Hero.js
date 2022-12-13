import React from "react";
import Icons from "../Icons/Icons";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import {
  faEnvelopeOpen,
  faWineGlassEmpty,
  faBeerMugEmpty,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero w-full before:w-0 lg:before:w-[20%] lg:before:glass   lg:bg-cover bg-no-repeat relative h-screen ">
      <h1 className="text-white flex-col  py-10 gap-2 lg:flex-row flex md:flex-row justify-center absolute lg:top-[35%] md:top-[35%] top-[17%] text-6xl md:text-6xl text-start lg:text-7xl">
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
      <div className="lg:flex md:flex hidden lg:flex-col  lg:absolute lg:bottom-0 lg:top-28 lg:right-4 lg:h-fit lg:text-6xl text-4xl z-10 text-white gap-2 lg:gap-12  justify-center  absolute bottom-48">
        <Icons name="DRINKS" icon={faWineGlassEmpty}></Icons>
        <Icons name="EVENTS" icon={faEnvelopeOpen}></Icons>
        <Icons name="GYM" icon={faBeerMugEmpty}></Icons>
      </div>
      <div className="lg:hidden md:hidden flex lg:h-fit lg:text-6xl text-4xl z-10 text-white gap-2  justify-center  absolute bottom-48">
        <Link to={"/services"}>
          <button className="flex gap-4 glass justify-center serviceBTN items-center  w-fit h-fit px-8 text-gray-100 py-4 rounded-xl">
            Services{" "}
            <FontAwesomeIcon className="animate-pulse" icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
