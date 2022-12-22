import React from "react";
import { useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import serviceData from "./serviceData";
const ServicesDetail = () => {
  const { serviceId } = useParams();
  const id = parseInt(serviceId);
  const thisService = serviceData.find((service) => service.id === id);
  console.log(serviceId);
  return (
    <div>
      <div className="bgRoom w-full">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Know more ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("About Our Services")

                  .start();
              }}
            />
          </h1>
        </div>
        <div className="w-full h-fit flex justify-between  text-gray-700 py-8   bg-gray-100">
          <img src={thisService.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
