import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import serviceData from "./serviceData";
import Footer from ".././Home/Shared/Footer/Footer";
import WhyChoose from ".././Home/WhyChoose/WhyChoose";
const ServicesDetail = () => {
  const { serviceId } = useParams();
  const id = parseInt(serviceId);
  const thisService = serviceData.find((service) => service.id === id);
  return (
    <div className="relative">
      <div className="bgRoom w-full relative">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
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
        <div className="w-full h-fit flex flex-wrap justify-between text-gray-700 py-8   bg-gray-100">
          <div className="w-full px-8 py-2 md:w-1/2 lg:w-1/2">
            <img className="w-full" src={thisService.img} alt="" />
          </div>
          <div className="lg:w-1/2 TF h-max md:w-1/2 w-full flex flex-col py-4 px-8">
            <p className="text-2xl  lg:text-3xl">
              A wonderful serenity has taken <br /> possession of my entire soul
            </p>
            <p className="text-md lg:text-lg py-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
              <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat <br /> upidatat non proident, sunt in culpa qui officia
              deserunt mollit <br /> anim id est laborum. Sed ut perspiciatis
              unde omnis iste natu.
            </p>
            <p className="uppercase text-2xl">Service details</p>
            <p className="py-2 text-md  lg:text-lg ">
              <FontAwesomeIcon
                className="text-orange-400 pr-2"
                icon={faCheckCircle}
              />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit.
            </p>
            <p className="py-2 text-md lg:text-lg">
              <FontAwesomeIcon
                className="text-orange-400 pr-2"
                icon={faCheckCircle}
              />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <div className="w-full h-fit  relative z-10 bottom-0 left-0">
          <WhyChoose></WhyChoose>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ServicesDetail;
