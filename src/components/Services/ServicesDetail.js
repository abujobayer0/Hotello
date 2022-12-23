import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import serviceData from "./serviceData";
import Choose from "../Home/Shared/Choose/Choose";
const ServicesDetail = () => {
  const { serviceId } = useParams();
  const id = parseInt(serviceId);
  const thisService = serviceData.find((service) => service.id === id);
  console.log(thisService);
  return (
    <div>
      <div className="bgRoom relative w-full">
        <div className="w-full flex h-80 justify-center relative pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${thisService.name}`)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(`${thisService.name}`)
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="w-full items-center relative   lg:flex-nowrap md:flex-nowrap flex-wrap  flex justify-between gap-8  text-gray-300 py-8 m-0 hover:bg-stone-800 glass px-8 bg-stone-800">
          <div className="    rounded-3xl  ">
            <img className=" w-full rounded-2xl" src={thisService.img} alt="" />
          </div>
          <div className="">
            <h2 className="lg:text-3xl quesFont  md:text-3xl text-2xl ">
              A wonderful serenity has taken <br /> possession of my entire soul
            </h2>
            <p className="text-lg my-4 quesFont">
              Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
              <br />
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat{" "}
              <br />
              upidatat non proident, sunt in culpa qui officia deserunt mollit{" "}
              <br />
              anim id est laborum. Sed ut perspiciatis unde omnis iste natu.
            </p>
            <p className="text-xl quesFont">SERVICE DETAIL</p>
            <p className="quesFont  text-lg gap-2 my-2">
              <FontAwesomeIcon
                className="text-orange-400 px-2"
                icon={faCheckCircle}
              />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit.
            </p>
            <p className="quesFont text-lg">
              <FontAwesomeIcon
                className="text-orange-400 px-2"
                icon={faCheckCircle}
              />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <Choose></Choose>
      </div>
    </div>
  );
};

export default ServicesDetail;
