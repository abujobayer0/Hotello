import {
  faBed,
  faChildCombatant,
  faScaleBalanced,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../images/RoomSuiteImg/pexels-vecislavas-popa-1743229.jpg";
const Room = () => {
  return (
    <div className="relative  bg-white ">
      <div className="relative mb-1">
        <img className="" src={img} alt="" />
        <p className="px-6 w-fit glass bg-stone-800 hover:bg-stone-800 py-2 mt-4 ml-4 flex justify-center rounded-lg text-white font-semibold text-sm  ">
          $60
        </p>
      </div>
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-4xl font-semibold">DELUXE</h1>
        <p className="text-sm py-4 border-b-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          expedita, non null.
        </p>

        <div className="flex py-2 items-center justify-center gap-8">
          <p className="flex justify-center items-center gap-2 text-md">
            <FontAwesomeIcon className="text-orange-400" icon={faUser} /> 1
          </p>
          <p className="flex justify-center items-center gap-2 text-md">
            <FontAwesomeIcon
              className="text-orange-400"
              icon={faChildCombatant}
            />{" "}
            2
          </p>
          <p className="flex justify-center items-center gap-2 text-md">
            {" "}
            <FontAwesomeIcon className="text-orange-400" icon={faBed} /> 3
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
      </div>
    </div>
  );
};

export default Room;
