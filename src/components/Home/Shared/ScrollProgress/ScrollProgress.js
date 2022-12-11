import React from "react";
import { motion, useScroll } from "framer-motion";
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="w-full fixed top-0 z-10 left-0 right-0 transform-none glass hover:bg-orange-400 bg-orange-400 h-1 "
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
