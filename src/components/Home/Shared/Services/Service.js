import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Service = ({ img, name, className, pra }) => {
  const style = { fontFamily: "Questrial', sans-serif" };
  const stylep = { fontFamily: "'Raleway', sans-serif" };
  return (
    <div>
      <div className={className}>
        <img className="w-full lg:w-1/2 md:w-1/2" src={img} alt="" />
        <div className="flex flex-col  justify-center items-center text-center">
          <h1 className="text-2xl py-4" style={style}>
            {name}
          </h1>
          <p style={stylep} className="text-md py-4 px-8">
            {pra}
          </p>
          <button className="text-orange-400 py-4  text-4xl">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
