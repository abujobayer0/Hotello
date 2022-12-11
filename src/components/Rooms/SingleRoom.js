import {
  faArrowRight,
  faBed,
  faChildCombatant,
  faScaleBalanced,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const SingleRoom = ({
  name,
  price,
  description,
  img,
  childern,
  guest,
  event,
  room,
  htmlFor,
  bed,
}) => {
  return (
    <div className="relative lg:w-80 w-full    bg-white ">
      <div className="relative mb-1">
        <img className="" src={img} alt="" />
        <p className="px-6 w-fit glass bg-stone-800 hover:bg-stone-800 py-2 mt-4 ml-4 flex justify-center rounded-lg text-white font-semibold text-sm  ">
          ${price}
        </p>
      </div>
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl font-semibold">
          {" "}
          {name.lenght <= 17 ? name : name.slice(0, 17) + ".."}
        </h1>
        <p className="text-sm py-4 px-2 text-center border-b-2">
          {description}
        </p>

        <div className="flex py-2 items-center justify-center gap-8">
          <p className="flex justify-center items-center gap-2 text-md">
            <FontAwesomeIcon className="text-orange-400" icon={faUser} />{" "}
            {guest}
          </p>
          <p className="flex justify-center items-center gap-2 text-md">
            <FontAwesomeIcon
              className="text-orange-400"
              icon={faChildCombatant}
            />{" "}
            {childern}
          </p>
          <p className="flex justify-center items-center gap-2 text-md">
            {" "}
            <FontAwesomeIcon className="text-orange-400" icon={faBed} /> {bed}
          </p>
          <p className="flex justify-center items-center gap-2 text-md">
            {" "}
            <FontAwesomeIcon
              className="text-orange-400"
              icon={faScaleBalanced}
            />{" "}
            4
          </p>
        </div>
        <div className="py-2">
          <label
            htmlFor={htmlFor}
            onClick={() => event(room)}
            className="btn glass gap-2 w-48 bg-stone-800 hover:bg-stone-800"
          >
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
