import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "./Image";
const Images = () => {
  const [filtered, setFiltered] = useState([]);
  const fetchPopular = async () => {
    const response = await fetch("rooms.json");
    const rooms = await response.json();
    setFiltered(rooms);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  const onFullScreen = (e) => {
    if (e.requestFullscreen) {
      e.requestFullscreen();
    }
  };

  return (
    <div>
      {filtered.length === 18 ? (
        <div className="w-full  h-fit flex flex-col-reverse lg:flex-row justify-between pb-12 lg:pb-0 md:pb-0 ">
          <motion.div className="flex w-full relative  flex-wrap py-12 px-6 justify-center items-center gap-8">
            <AnimatePresence>
              {filtered.map((room) => (
                <Image
                  handler={onFullScreen}
                  room={room}
                  key={room.id}
                  name={room.name}
                  detail={room.description}
                  price={room.price}
                  img={room.image}
                ></Image>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        <div className="w-full py-48  flex gap-12 justify-center items-center bg-gray-100 h-96">
          <div
            className="radial-progress glass   animate-spin"
            style={{ "--value": 50 }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Images;
