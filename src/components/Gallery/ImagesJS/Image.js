import React from "react";
import { motion } from "framer-motion";
import "./font.css";
import { Link } from "react-router-dom";
const Image = ({ img, name, room, handler, detail, price }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onClick={() => handler(room)}
        className="relative cursor-pointer flip-box  lg:w-80 w-full   shadow-lg  bg-white "
      >
        <div className="relative flip-box-inner">
          <div className="flip-box-front">
            <img src={img} alt="" />
          </div>
          <div className="flip-box-back glass  text-sm py-4 px-2 text-slate-300 bg-stone-800 hover:bg-stone-800">
            <h1>{name}</h1>
            <p>{detail}...</p>
            <p>${price}</p>
            <Link
              to={`/rooms/${room.id}`}
              className="btn glass gap-2 w-48 bg-orange-600 hover:bg-orange-600 mt-2"
            >
              {" "}
              GO
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Image;
