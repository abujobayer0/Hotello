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

  return (
    <div>
      <div className="w-full  h-fit flex flex-col-reverse lg:flex-row justify-between pb-12 lg:pb-0 md:pb-0 ">
        <motion.div className="flex w-full relative  flex-wrap py-12 px-6 justify-center items-center gap-8">
          <AnimatePresence>
            {filtered.map((room) => (
              <Image key={room.id} img={room.image}></Image>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Images;
