import React, { useEffect, useState } from "react";
import "./Rooms.css";
import Selection from "./Selection";
import SingleRoom from "./SingleRoom";
import Footer from ".././Home/Shared/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import {
  faBaby,
  faBed,
  faFilter,
  faMoneyBill1Wave,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
  const [studio, setStudio] = useState([]);
  const [modal, setModal] = useState([]);
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchPopular = async () => {
    const response = await fetch("rooms.json");
    const rooms = await response.json();
    setPopular(rooms);
    setFiltered(rooms);
    setStudio(rooms);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  const handleClick = (e) => {
    console.log(e);
    setModal(e);
  };
  console.log(popular.length);
  const searchHandleRoom = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.no === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };
  const searchHandleGuest = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.guest === e);

      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.guest === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.guest === e);
      setPopular(newfiltered);
    } else if (e === 4) {
      const newfiltered = studio.filter((r) => r.guest === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };
  const searchHandleChilden = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 4) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };

  const searchHandleBed = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.bed === e);
      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.bed === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.bed === e);
      setPopular(newfiltered);
    } else if (e === 4) {
      const newfiltered = studio.filter((r) => r.bed === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };
  return (
    <div>
      <div className="bgRoom w-full">
        <div className="w-full  flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl text-white font-semibold">ROOM</h1>
        </div>
        <div className="w-full h-fit flex flex-col-reverse lg:flex-row justify-between pb-12 lg:pb-0 md:pb-0  bg-gray-100">
          {studio === "" || popular === "" ? (
            <div className="alert shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-info flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>No Longer avaiable..</span>
              </div>
            </div>
          ) : (
            <motion.div className="flex w-full relative  flex-wrap py-12 px-6 justify-center items-center gap-8">
              {filtered.length === 18 ? (
                <AnimatePresence>
                  {popular.map((room) => (
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
                </AnimatePresence>
              ) : (
                <div
                  className="radial-progress animate-spin"
                  style={{ "--value": 70 }}
                ></div>
              )}
            </motion.div>
          )}
          <div
            tabIndex={0}
            className="collapse lg:collapse-open lg:w-[45%] m-2 pt-10 h-fit w-full"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title glass text-white text-2xl bg-stone-800 hover:bg-stone-800">
              Filter Here <FontAwesomeIcon icon={faFilter} />
            </div>

            <div className="flex collapse-content items-center text-center flex-wrap relative  py-4 h-fit   justify-center ">
              <div className="flex w-full gap-12  items-center text-center flex-wrap relative     glass py-4 h-fit justify-center ">
                <Selection
                  selection="ROOM TYPE"
                  handler={searchHandleRoom}
                  status="hidden w-fit focus:bg-stone-600 px-4 text-sm py-2"
                  normal="ALL"
                  optionone="DELUXE"
                  optiontwo="STUDIO"
                  optionthree="STANDART"
                ></Selection>
                <Selection
                  selection="GUEST"
                  option={0}
                  handler={searchHandleGuest}
                  normal="ALL"
                  optionone={1}
                  status=" w-fit focus:bg-stone-600 px-4 text-sm py-2"
                  optiontwo={2}
                  optionFour={4}
                  optionthree={3}
                ></Selection>
                <Selection
                  selection="CHILDERN"
                  option={0}
                  normal="ALL"
                  optionone={1}
                  handler={searchHandleChilden}
                  status=" w-fit focus:bg-stone-600 px-4 text-sm py-2"
                  optiontwo={2}
                  optionFour={4}
                  optionthree={3}
                ></Selection>
                <Selection
                  selection="BED"
                  status="hidden w-fit focus:bg-stone-600 px-4 text-sm py-2"
                  option={0}
                  normal="ALL"
                  handler={searchHandleBed}
                  optionone={1}
                  optionthree={3}
                  optiontwo={2}
                ></Selection>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <label htmlFor="my-modal-6"></label>
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
