import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/Logo/logo.png";
import { faPhoneFlip, faCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const style = { fontFamily: "'Raleway', sans-serif" };
  const stylep = { fontFamily: " 'Questrial', sans-serif" };
  return (
    <div className="lg:flex z-10 hidden  absolute top-8 w-full items-center justify-center gap-52">
      <div className="text-white  text-sm">
        <h1 style={stylep}>
          <FontAwesomeIcon className="text-orange-400" icon={faPhoneFlip} /> +31
          (0) 20 507 000
        </h1>
      </div>
      <div className="logo">
        <img className="w-48" src={logo} alt="" />
      </div>
      <div
        style={style}
        className="flex  items-center justify-center text-sm text-white"
      >
        <h2 className="border-r-2 pr-8">in New York</h2>
        <div className="flex   h-10  gap-2 ml-4 justify-center items-center w-28">
          <a className="" href="">
            <FontAwesomeIcon icon={faCircle} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCircle} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCircle} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCircle} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
