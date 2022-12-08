import React from "react";
import Service from "./Service";
import roomImg from "../../../images/Service Img/hotel-g98c0fbe34_1920.jpg";
import resturentImg from "../../../images/Service Img/table-g9a7f15a4a_1920.jpg";
import gymImg from "../../../images/Service Img/woman-gf08330058_1920.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="w-full bg-cover flex flex-col bg-gray-200 h-fit">
      <FontAwesomeIcon
        className="pt-8 animate-pulse  text-stone-700 text-5xl"
        icon={faSearch}
      />
      <h1 className="pt-2 text-center text-stone-700 text-5xl">
        Best Service for you
      </h1>
      <div className="pt-16 mb-12 px-20">
        <Service
          pra="Abundantly tree made. Days saw thing whales may, creeping after abundantly waters, fourth so were, gathered above cattle lights waters."
          name="ROOMS & APARTMENTS"
          className="flex text-stone-700  glass flex-wrap lg:flex-nowrap md:flex-nowrap w-full  justify-center items-center"
          img={roomImg}
        ></Service>

        <Service
          pra="Divide yielding. Lesser man said shall So. And. Void under lights rule evening were also replenish firmament fish. Night upon."
          name="RESTURENT"
          className="flex glass text-stone-700  flex-wrap lg:flex-nowrap md:flex-nowrap flex-row-reverse  w-full  justify-center items-center"
          img={resturentImg}
        ></Service>

        <Service
          pra="Fourth, give yielding. Signs, made. Herb. Behold make sixth two deep fly which without darkness beginning they’re winged days. Whose."
          name="SPA & FITNESS"
          className="flex text-stone-700  glass flex-wrap lg:flex-nowrap md:flex-nowrap  w-full  justify-center items-center"
          img={gymImg}
        ></Service>
      </div>
    </div>
  );
};

export default Services;
