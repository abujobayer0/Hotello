import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Style.css";
const Img = ({ service, icon, text, img }) => {
  return (
    <div>
      <div className="container TF bg-gray-100 transition-all ease-in-out relative">
        <img src={img} alt="Avatar" className="w-full image" />
        <div className="InnerText bg-stone-700 py-4 glass text-2xl w-full text-gray-200 flex flex-col justify-center items-center">
          <p>
            <FontAwesomeIcon className="text-5xl text-orange-400" icon={icon} />
          </p>
          <p className="uppercase">{service}</p>
        </div>
        <div className="middle flex flex-col text-white   justify-center items-center">
          <div className="z-10 px-4">
            <h1 className="text-2xl bg-stone-700 hover:bg-stone-700 py-4  glass uppercase px-2">
              {service}
            </h1>
            <div className="text-lg py-2">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img;
