import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faBottleWater,
  faGlassCheers,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Img from "./Img";
import "./Style.css";
const ServicesImages = () => {
  return (
    <div className="grid TF relative grid-cols-1 transition-all ease-in-out  items-center  bg-gray-100 md:grid-cols-2 lg:grid-cols-4">
      <Img
        icon={faBottleWater}
        service={"24 hour service"}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
        img={
          "https://images.unsplash.com/photo-1591825692235-69e99d4189f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
      ></Img>
      <Img
        icon={faGlassCheers}
        img={
          "https://images.unsplash.com/photo-1591870510340-c8578d6c3b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 "
        }
        service={"resturent and bars"}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
      ></Img>
      <Img
        icon={faCalendar}
        img={
          "https://images.unsplash.com/photo-1590725140246-20acdee442be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        service={"events and meetings "}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
      ></Img>
      <Img
        icon={faLeaf}
        img={
          "https://images.unsplash.com/photo-1592008432356-8ef189954b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        service={"fitness and spa"}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
      ></Img>
    </div>
  );
};

export default ServicesImages;
