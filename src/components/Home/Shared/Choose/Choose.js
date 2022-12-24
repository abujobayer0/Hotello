import {
  faConciergeBell,
  faMugHot,
  faPlateWheat,
  faShirt,
  faSpa,
  faSwimmingPool,
  faWifi,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Choose = () => {
  return (
    <div className="flex relative justify-center flex-wrap">
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faWifi} />
        </div>
        <p className="absolute bottom-0 text-md">INTERNET</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faWineBottle} />
        </div>
        <p className="absolute bottom-0 text-md">DRINKS</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faConciergeBell} />
        </div>
        <p className="absolute bottom-0 text-md">CONCIERGE</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faSwimmingPool} />
        </div>
        <p className="absolute bottom-0 text-md">POLL</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faMugHot} />
        </div>
        <p className="absolute bottom-0 text-md">FITNESS</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faShirt} />
        </div>
        <p className="absolute bottom-0 text-md">LOUNDRY</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faPlateWheat} />
        </div>
        <p className="absolute bottom-0 text-md">RESTURENT</p>
      </div>
      <div className="w-36 h-60 flex flex-col lg:mx-28 mx-4 justify-center items-center relative">
        <div className="w-36 h-36 bg-gray-200 transition-all ease-in-out   text-5xl hover:text-orange-400 hover:w-44 hover:h-44  flex  drop-shadow-2xl justify-center items-center text-stone-700 rounded-full">
          <FontAwesomeIcon icon={faSpa} />
        </div>
        <p className="absolute bottom-0 text-md">SPA</p>
      </div>
    </div>
  );
};

export default Choose;
