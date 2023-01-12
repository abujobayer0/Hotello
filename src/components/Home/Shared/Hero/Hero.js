import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="hero w-full scale-110 lg:bg-cover bg-no-repeat relative md:h-[90vh] h-screen lg:h-[80vh] ">
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

        <div className="lg:hidden md:hidden flex lg:h-fit lg:text-6xl text-4xl z-10 text-white gap-2  justify-center  absolute bottom-48">
          <Link to={"/services"}>
            <button className="flex gap-4 glass justify-center serviceBTN items-center  w-fit h-fit px-8 text-gray-100 py-4 rounded-xl">
              Services{" "}
              <FontAwesomeIcon className="animate-pulse" icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
