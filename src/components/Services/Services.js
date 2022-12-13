import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";
import ServiceItem from "./ServiceItem";
const Services = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div className=" w-full flex flex-col  relative bgRoom">
      <div className="w-full flex h-80 justify-center  items-center ">
        <h1 className="text-4xl  py-24 mt-12 lg:mt-12 md:mt-12  lg:py-24 md:py-24 lg:pt-36 md:pt-36 text-white font-semibold">
          {" "}
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Our Services")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Happy Customer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Best For You ")
                .start();
            }}
          />
        </h1>
      </div>
      {items.length === 6 ? (
        <div className="w-full h-fit justify-center items-center gap-12 py-10 bg-gray-100 flex flex-wrap">
          {items.map((item) => (
            <ServiceItem
              name={item.name}
              img={item.img}
              price={item.price}
              detail={item.detail}
            ></ServiceItem>
          ))}
        </div>
      ) : (
        <div className="w-full  flex justify-center items-center bg-gray-100 h-96">
          <div
            className="radial-progress animate-spin"
            style={{ "--value": 70 }}
          ></div>
          <div className="text-2xl">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Loading...")
                  .pauseFor(100)
                  .deleteAll()
                  .typeString("Loading...")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Loading... ")
                  .start();
              }}
            />
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Services;
