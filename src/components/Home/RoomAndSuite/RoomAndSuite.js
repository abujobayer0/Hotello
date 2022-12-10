import React, { useEffect, useState } from "react";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Room from "./Room";

const RoomAndSuite = () => {
  const [deluxe, setDeluxe] = useState([]);
  useEffect(() => {
    fetch("deluxe.json")
      .then((res) => res.json())
      .then((data) => setDeluxe(data));
  }, []);
  const [standart, setStandart] = useState([]);
  useEffect(() => {
    fetch("standart.json")
      .then((res) => res.json())
      .then((data) => setStandart(data));
  }, []);
  const [studio, setStudio] = useState([]);
  useEffect(() => {
    fetch("studio.json")
      .then((res) => res.json())
      .then((data) => setStudio(data));
  }, []);
  const handleModal = () => {};
  return (
    <div className="bg-stone-900 glass pb-16 hover:bg-stone-900">
      <div className="w-full h-52">
        <div className="flex flex-col  justify-center items-center">
          <FontAwesomeIcon
            className="text-white pt-6 text-5xl"
            icon={faRainbow}
          ></FontAwesomeIcon>
          <h1 className="text-5xl text-white text-center pt-4">
            {" "}
            Rooms & suits
          </h1>
        </div>
        <div className="flex justify-center items-center w-full py-2 pt-6 gap-2">
          <a
            href="#item1"
            className=" flex glass text-white  justify-center items-center  px-8 py-2 btn-xs"
          >
            DELUXE
          </a>
          <a
            href="#item2"
            className="flex glass  text-white justify-center items-center  px-8 py-2 btn-xs"
          >
            STANDART
          </a>
          <a
            href="#item3"
            className=" glass flex text-white  justify-center items-center  px-8 py-2 btn-xs"
          >
            STUDIO
          </a>
        </div>
      </div>
      <div className="carousel relative w-full px-12">
        <div
          id="item1"
          className="carousel-item w-full flex gap-8 px-8 flex-wrap  md:flex-nowrap lg:flex-nowrap"
        >
          {deluxe.map((r) => (
            <Room
              room={r}
              key={r.id}
              name={r.name}
              description={r.description}
              img={r.img}
              price={r.price}
              handleModal={handleModal}
            ></Room>
          ))}
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex gap-8 px-8 flex-wrap  md:flex-nowrap lg:flex-nowrap"
        >
          {standart.map((r) => (
            <Room
              key={r.id}
              name={r.name}
              description={r.description}
              img={r.img}
              price={r.price}
            ></Room>
          ))}
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex gap-8 px-8 flex-wrap  md:flex-nowrap lg:flex-nowrap"
        >
          {studio.map((r) => (
            <Room
              key={r.id}
              name={r.name}
              description={r.description}
              img={r.img}
              price={r.price}
            ></Room>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RoomAndSuite;
