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
    <div className=" w-full bgRoom">
      <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
        <h1 className="text-4xl  text-white font-semibold">
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
      <Footer></Footer>
    </div>
  );
};

export default Services;
