import { faCartArrowDown, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";

import productsData from "./productsData";
const RoomDetail = () => {
  const { roomsId } = useParams();
  const id = parseInt(roomsId);

  const thisRoom = productsData.find((room) => room.id === id);
  console.log(thisRoom);
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
            <h1 className="pt-2">{thisRoom.name}</h1>
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
              </div>
              <button className="btn glass  gap-2 w-48 bg-stone-800 hover:bg-stone-800">
                Checkout Now <FontAwesomeIcon icon={faCartArrowDown} />
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RoomDetail;
