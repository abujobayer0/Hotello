import {
  faArrowRightLong,
  faCheck,
  faEarth,
  faMapPin,
  faMessage,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from ".././images/Logo/logo.png";
import ReactToPdf from "react-to-pdf";
const CheckoutConfirmation = ({
  startDate,
  firstName,
  Guest,
  room,
  endDate,
  lastName,
  email,
  telephone,
  textArea,
}) => {
  const stylep = { fontFamily: " 'Questrial', sans-serif" };
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [9, 9],
  };
  const ref = React.createRef();

  return (
    <div className="w-full">
      <div ref={ref} className=" w-10/12 mx-auto mt-12 bg-stone-400 ">
        <div className="flex flex-col  justify-center p-4 items-center w-full">
          <img className="w-52 p-4" src={logo} alt="" />
          <div className="flex border-b-4 pb-4 lg:gap-4 gap-2  flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around mb-4  text-white">
            {" "}
            <h1 style={stylep}>
              <FontAwesomeIcon
                className="text-orange-200 px-2"
                icon={faPhoneFlip}
              />{" "}
              +31 (0) 20 507 000
            </h1>
            <h2>
              <FontAwesomeIcon
                className="text-orange-200 px-2"
                icon={faMapPin}
              />{" "}
              in New York
            </h2>
            <h2>
              <FontAwesomeIcon
                className="text-orange-200 px-2"
                icon={faMessage}
              />
              zubayer.munna.dev.@gmail.com
            </h2>
            <h2>
              {" "}
              <FontAwesomeIcon
                className="text-orange-200 px-2"
                icon={faEarth}
              />{" "}
              https://hotello-zubayermunna.vercel.app/
            </h2>
          </div>
          <div className="flex w-full flex-wrap lg:flex-nowrap justify-between mb-8 text-white lg:px-16">
            <div className="flex w-96 flex-col ">
              <h1 className="text-start text-sm md:text-md lg:text-lg ">
                Booking Details
              </h1>{" "}
              <p className="w-full text-xs lg:text-sm flex justify-between items-center p-2">
                Check-in <span>{startDate}</span>
              </p>
              <hr />
              <p className="w-full text-xs lg:text-sm flex justify-between items-center p-2">
                Check-out
                <span>{endDate}</span>
              </p>{" "}
              <hr />
              <p className="w-full text-xs lg:text-sm flex justify-between items-center p-2">
                Guest<span>{Guest} Adults</span>
              </p>
              <hr />
              <p className="w-full text-xs lg:text-sm flex justify-between items-center p-2">
                Bed <span>{room.bed} bed</span>
              </p>
              <hr />
              <p className="w-full text-xs lg:text-sm flex justify-between items-center p-2">
                Childern <span>{room.childern} child</span>
              </p>
              <hr />
            </div>
            <div>
              <h1 className="text-sm p-2 lg:text-2xl text-stone-700  font-thin ">
                BOOKING
              </h1>
            </div>
          </div>
          <div className="flex w-full justify-between text-xs lg:text-sm flex-wrap lg:flex-nowrap text-white lg:px-16">
            <div className="flex w-96 flex-col ">
              <h1 className="text-start text-sm lg:text-sm border-l-2  bg-orange-500 px-4 py-2 ">
                Booked By
              </h1>{" "}
              <p className="w-full flex justify-between  items-center p-2">
                {firstName + " " + lastName}
              </p>
              <p className="w-full flex justify-between items-center p-2">
                {email}
              </p>
              <p className="w-full flex justify-between items-center p-2">
                {telephone}
              </p>
              <p className="w-full flex text-xs justify-between items-center p-2">
                Customer Special Request{" "}
                <FontAwesomeIcon icon={faArrowRightLong} /> {textArea}
              </p>
            </div>
            <div>
              <div className="flex gap-2 border-l-2   bg-orange-500 px-6 lg:px-4 py-2 justify-around items-center">
                <h1 className="text-sm lg:text-sm ">Booking Date & Time</h1>
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                <h1 className="text-xs lg:text-sm underline ">
                  {new Date().toLocaleString() + ""}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 text-sm flex flex-col justify-center font-normal lg:px-20 bg-stone-500 h-48">
            <h1 className="flex px-12 justify-between items-text-xs lg:center text-orange-200 text-xl">
              {" "}
              <span>{room.name}</span>
            </h1>
            <h1 className="flex px-12 justify-between items-center text-white">
              {" "}
              <span>Subtotal</span> <span>$ {room.price}</span>
            </h1>
            <h1 className="flex px-12  justify-between items-center text-white">
              {" "}
              <span>tax total</span> <span>$ {(room.price / 100) * 5}</span>
            </h1>
            <hr />

            <h1 className="flex px-12 justify-between items-center text-white">
              {" "}
              <span>total</span>{" "}
              <span> $ {(room.price / 100) * 5 + room.price}</span>
            </h1>
          </div>
          <p className="text-white p-4">
            Successfully booked <FontAwesomeIcon icon={faCheck} />
          </p>
        </div>
      </div>
      <div className="alert w-10/12 mx-auto my-2 alert-success shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your Booking has been confirmed!</span>
        </div>
      </div>
      <ReactToPdf
        targetRef={ref}
        filename="div-blue.pdf"
        options={options}
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => (
          <div className="w-full flex justify-center">
            <button
              className="btn mb-12 bg-orange-400 border-none mx-auto"
              onClick={toPdf}
            >
              Save
            </button>
          </div>
        )}
      </ReactToPdf>
    </div>
  );
};

export default CheckoutConfirmation;
