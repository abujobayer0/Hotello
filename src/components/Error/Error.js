import React from "react";
import img from "./undraw_beach_day_cser.svg";
const error = () => {
  return (
    <div className="flex justify-center items-center glass  bg-stone-800 hover:bg-stone-800 w-full h-screen">
      <img className="w-1/2 h-1/2" src={img} alt="" />
      <h1 className="text-white text-2xl">PROGRESSING...</h1>
    </div>
  );
};

export default error;
