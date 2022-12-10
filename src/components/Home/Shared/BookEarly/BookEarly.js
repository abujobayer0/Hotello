import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import mainLogo from ".././../../images/Logo/logo.png";
import imageOne from ".././../../images/Caousel/pexels-azri-suratmin-122244.jpg";
import imageTwo from ".././../../images/Caousel/pexels-pixabay-271624.jpg";
import imageThree from ".././../../images/Caousel/pexels-elevate-1267320.jpg";
import imageFour from ".././../../images/Caousel/pexels-kendall-hoopes-635041.jpg";
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

      <footer className="footer p-8 h-fit bg-stone-900 glass hover:bg-stone-900 text-gray-400 w-full ">
        <div>
          <img className="w-52" src={mainLogo} alt="" />
          <p>
            We always strive for growth and <br />
            development as StylemixThemes. <br /> We don’t want to have a large
            team, <br /> we want to have a team that works <br /> in unity. Our
            slogan is “Every day is <br /> the last day”.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">GALLERY</span>
          <div className=" flex">
            <div className="w-28">
              <img className=" w-full" src={imageOne} alt="" />
            </div>
            <div className="w-28">
              <img className=" w-full" src={imageTwo} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="w-28">
              <img className=" w-full" src={imageThree} alt="" />
            </div>
            <div className="w-28">
              <img className=" w-full" src={imageFour} alt="" />
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">CONTACT US</span>
          <a className="link link-hover">
            1010 Berkler avenue, Brooklyn, <br /> New York City, NY 10018 US
          </a>
          <a className="link link-hover">Tel.: +1 998 150 3020</a>
          <a className="link link-hover">Fax.: +1 998 150 3020</a>
          <a className="link link-hover">info@stylemixthemes.com</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default BookEarly;
