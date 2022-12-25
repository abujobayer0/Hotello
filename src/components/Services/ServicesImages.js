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
          "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
      ></Img>
      <Img
        icon={faGlassCheers}
        img={
          "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
        service={"resturent and bars"}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
      ></Img>
      <Img
        icon={faCalendar}
        img={
          "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
        service={"events and meetings "}
        text={
          "A wonderful serentity has taken possession of my entire soul like these sweet morning of springs which I enjoy with my whole heart "
        }
      ></Img>
      <Img
        icon={faLeaf}
        img={
          "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
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
