import React, { useEffect, useState } from "react";
import "./Rooms.css";
import Selection from "./Selection";
import SingleRoom from "./SingleRoom";
import Footer from ".././Home/Shared/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faBed,
  faDollar,
  faMoneyBill,
  faMoneyBill1Wave,
  faPersonBooth,
  faPersonShelter,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [modal, setModal] = useState([]);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const handleClick = (e) => {
    console.log(e);
    setModal(e);
  };
  return (
    <div>
      <div className="bgRoom w-full">
        <div className="w-full  flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl text-white font-semibold">ROOM</h1>
        </div>
        <div className="w-full h-fit  pb-12 lg:pb-0 md:pb-0 flex pt-8 flex-wrap bg-gray-100">
          <div className="flex  w-[80%] z-10 items-center  flex-wrap relative gap-4   mx-auto h-fit  justify-between px-12">
            <Selection
              selection="ROOM TYPE"
              optionone="DELUXE"
              optiontwo="STANDART"
              optionthree="STUDIO"
            ></Selection>
            <Selection
              selection="GUEST"
              option={0}
              normal={1}
              optionone={2}
              optiontwo={3}
              optionthree={4}
            ></Selection>
            <Selection
              selection="CHILDERN"
              option={0}
              normal={1}
              optionone={2}
              optiontwo={3}
              optionthree={4}
            ></Selection>
            <button className="bg-orange-600 h-fit glass  text-lg hover:bg-orange-600 text-white px-12 py-2">
              <FontAwesomeIcon className="animate-pulse" icon={faSearch} />{" "}
              Filter
            </button>
          </div>
          {rooms.length === 18 ? (
            <div className="flex w-full relative  flex-wrap py-12 px-6 justify-center items-center gap-8">
              {rooms.map((room) => (
                <SingleRoom
                  event={handleClick}
                  price={room.price}
                  bed={room.bed}
                  room={room}
                  htmlFor="my-modal-6"
                  childern={room.childern}
                  guest={room.guest}
                  name={room.name}
                  description={room.description}
                  key={room.id}
                  img={room.image}
                ></SingleRoom>
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-96">
              <div
                className="radial-progress w-20  glass   animate-spin"
                style={{ "--value": 70 }}
              ></div>
            </div>
          )}
        </div>
        <Footer></Footer>
      </div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6"></label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal w-full bg-transparent modal-bottom sm:modal-middle">
        <div className="modal-box bg-stone-600 hover:bg-stone-600 glass">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle glass absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex  justify-around flex-col items-center py-8">
            <div className="w-full flex flex-col justify-center items-center">
              <img src={modal.image} className=" rounded-lg w-full" alt="" />
              <h3 className="p-4 text-gray-300   font-lg  text-3xl">
                {modal.name}
              </h3>
            </div>
            <div className="flex flex-col justify-start items-start text-gray-300">
              <p>
                BED : <span className=" p-2  "> {modal.bed}</span>{" "}
                <FontAwesomeIcon icon={faBed} />
              </p>
              <p>
                {" "}
                PRICE : <span className="p-2  "> ${modal.price}</span>{" "}
                <FontAwesomeIcon icon={faMoneyBill1Wave} />
              </p>
              <p>
                <FontAwesomeIcon icon={faUser} /> USER :{" "}
                <span className=" p-2  ">{modal.guest} </span> member
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faBaby} /> CHILDERN :{" "}
                <span className=" p-2  "> {modal.childern}</span>
                child
              </p>
              <p className="text-gray-300 pt-4"> {modal.description}...</p>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn glass bg-stone-800 hover:bg-stone-800"
            >
              Check Out
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
