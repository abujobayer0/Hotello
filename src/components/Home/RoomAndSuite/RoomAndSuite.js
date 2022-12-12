import React, { useEffect, useState } from "react";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Room from "./Room";
import { AnimatePresence, motion } from "framer-motion";

const RoomAndSuite = () => {
  const [studio, setStudio] = useState([]);

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchPopular = async () => {
    const response = await fetch("deluxe.json");
    const rooms = await response.json();
    setFiltered(rooms);
    setStudio(rooms);
  };
  useEffect(() => {
    fetch("standart.json")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  useEffect(() => {
    fetchPopular();
  }, []);
  const handleForCarousel = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };
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
            onClick={() => handleForCarousel(1)}
            className=" flex glass text-white focus:bg-orange-600  justify-center items-center  px-8 py-2 btn-xs"
          >
            DELUXE
          </a>
          <a
            onClick={() => handleForCarousel(2)}
            className="flex glass focus:bg-orange-600 text-white justify-center items-center  px-8 py-2 btn-xs"
          >
            STANDART
          </a>
          <a
            onClick={() => handleForCarousel(3)}
            className=" glass flex text-white focus:border-b-2 justify-center items-center  px-8 py-2 btn-xs"
          >
            STUDIO
          </a>
        </div>
      </div>
      <div className="carousel relative w-full px-8">
        <motion.div className="carousel-item w-full flex gap-8 px-8 flex-wrap  md:flex-nowrap lg:flex-nowrap">
          <AnimatePresence>
            {" "}
            {popular.map((r) => (
              <Room
                room={r}
                bed={r.bed}
                childern={r.childern}
                guest={r.guest}
                key={r.id}
                name={r.name}
                description={r.description}
                img={r.img}
                price={r.price}
              ></Room>
            ))}{" "}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
export default RoomAndSuite;
