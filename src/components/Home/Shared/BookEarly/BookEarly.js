import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Footer/Footer";

import "./BookEarly.css";
const BookEarly = () => {
  return (
    <div className="bg">
      <div className=" py-8 gap-4  items-center flex justify-center flex-col  ">
        <FontAwesomeIcon className="text-5xl text-white" icon={faHotel} />
        <h1 className="text-4xl  text-center text-white font-semibold py-8">
          BOOK EARLY & SAVE
        </h1>
        <p className="text-white flex justify-center items-center text-center ">
          Book early and save up to 15% with Lorem ipsum dolor sit amet,
          consectetur <br /> adipisicing elit, sed do eiusmod tempor aliqua.
        </p>
        <button
          className="btn
         glass bg-stone-800"
        >
          BOOK ON BOOKING.COM
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookEarly;
