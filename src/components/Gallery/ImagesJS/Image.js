import React from "react";
import { motion } from "framer-motion";

const Image = ({ img }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative cursor-not-allowed  lg:w-80 w-full  shadow-lg  bg-white ">
        <div className="relative">
          <img src={img} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Image;
