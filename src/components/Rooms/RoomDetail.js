import {
  faCartArrowDown,
  faConciergeBell,
  faFan,
  faHardDrive,
  faKey,
  faMugHot,
  faQuoteLeft,
  faQuoteRight,
  faReceipt,
  faShower,
  faSliders,
  faSmoking,
  faTelevision,
  faTrash,
  faWifi,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";

import productsData from "./productsData";
const RoomDetail = () => {
  const { roomsId } = useParams();
  const id = parseInt(roomsId);
  const thisRoom = productsData.find((room) => room.id === id);

  return (
    <div>
      <div className="bgRoom w-full">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Room Details ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Check out Page")

                  .start();
              }}
            />
          </h1>
        </div>
        <div className="w-full h-fit  text-gray-700   bg-gray-100">
          <div className="text-4xl  text-center  pt-8">
            <FontAwesomeIcon
              className=" text-5xl text-orange-400"
              icon={faReceipt}
            />
            <h1 className="pt-2 text-stone-600">{thisRoom.name}</h1>
          </div>
          <div className="flex lg:p-10 md:p-8 md:flex-row flex-col p-4 lg:flex-row">
            <div>
              <img src={thisRoom.image} alt="" />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-8 p-4">
              <div className="w-full">
                <h1 className="text-orange-400">ROOM DETAILS</h1>
                <p className="w-full border-b-2 text-md flex  justify-between h-12 px-4 items-center">
                  {" "}
                  <span>Guests:</span> {thisRoom.guest}
                </p>
                <p className="w-full border-b-2 text-md flex justify-between h-12 px-4 items-center">
                  {" "}
                  <span>Childern:</span> {thisRoom.childern}
                </p>
                <p className="w-full border-b-2 text-md flex justify-between h-12 px-4 items-center">
                  {" "}
                  <span>Bed:</span> {thisRoom.bed}
                </p>
                <p className="w-full border-b-2 text-md flex justify-between h-12 px-4 items-center">
                  {" "}
                  <span>Price per night: </span>$ {thisRoom.price}
                </p>
              </div>
              <Link to={`/checkout/${thisRoom.id}`}>
                <button className="btn glass  gap-2 w-48 bg-stone-800 hover:bg-stone-800">
                  Checkout Now <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-center text-orange-400  text-4xl  ">
              <FontAwesomeIcon icon={faQuoteLeft} /> Facilities{" "}
              <FontAwesomeIcon icon={faQuoteRight} />
            </h1>
            <div className="w-full flex pb-8  flex-wrap justify-center  relative text-2xl  gap-2 pt-8  p-4">
              <div className="text-5xl  hover:glass hover:text-orange-400 ease-in-out transition-all border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faFan} />
                <h1 className="text-[12px]">AIR CONDITIONAL</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faTelevision} />
                <h1 className="text-[12px]">TELEVISION</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faTrash} />
                <h1 className="text-[12px]">CLEANING</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faConciergeBell} />
                <h1 className="text-[12px]">CONCIERGE</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faSliders} />
                <h1 className="text-[12px]">FREE SLIPPERS</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faWifi} />
                <h1 className="text-[12px]">FREE WIFI</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faMugHot} />
                <h1 className="text-[12px]">GYM ACCESS</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faHardDrive} />
                <h1 className="text-[12px]">HAIR DRYER</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faKey} />
                <h1 className="text-[12px]">KEYDOOR</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faWineGlass} />
                <h1 className="text-[12px]">MIN BAR</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faShower} />
                <h1 className="text-[12px]">SHOWER</h1>
              </div>
              <div className="text-5xl  hover:glass hover:text-orange-400 transition-all ease-in-out  border-r-2 w-36 shadow-md bg-white  p-4 text-stone-600 flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faSmoking} />
                <h1 className="text-[12px]">SMOKING</h1>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default RoomDetail;
