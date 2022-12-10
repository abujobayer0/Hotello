import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Uer = ({ name, position, review, img }) => {
  return (
    <div className=" w-full">
      <div className="bg-white py-8 relative rounded-sm px-4">
        <div className="text-orange-400 py-2">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="flex flex-wrap justify-center items-center h-52">
          {review}
        </p>
        <div className="w-full flex justify-end text-4xl text-orange-400">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
      <div className="w-full pt-4">
        <div className="flex justify-start gap-2 items-center">
          <img src={img} className=" w-20 h-20 rounded-full " alt="" />
          <div>
            <h2 className="text-xl">{name} </h2>
            <h3 className="text-sm">{position}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uer;
