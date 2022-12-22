import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { addDays } from "date-fns";
import productsData from "./productsData";
import { DateRangePicker } from "react-date-range";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import CheckoutConfirmation from "./CheckoutConfirmation";

import Footer from "../Home/Shared/Footer/Footer";
import Popup from "./Popup";
const CheckOutPage = () => {
  const { checkoutId } = useParams();
  const id = parseInt(checkoutId);
  const [print, setPrint] = useState(false);
  const thisRoom = productsData.find((room) => room.id === id);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [btn, setBtn] = useState(false);
  const handleBtn = () => {
    setBtn(true);
  };
  const handleClose = () => {
    setBtn(false);
  };

  const style = {
    color: "white",
    backgroundColor: "#fff",
    padding: "1rem",
    fontFamily: "Arial",
    position: "relative",
    width: "fit-content",
  };
  const startDatee = date.map((d) => d.startDate);
  const showStartDate = startDatee[0].toUTCString();
  const endDatee = date.map((d) => d.endDate);
  const showEndDate = endDatee[0].toUTCString();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [email, setEmail] = useState("");
  const handleTextarea = (e) => {
    const newTxt = e.target.value;
    setTextarea(newTxt);
  };
  const handleTelephone = (e) => {
    const newTele = e.target.value;
    setTelephone(newTele);
  };
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleLastName = (e) => {
    const lastNameValue = e.target.value;
    setLastName(lastNameValue);
  };
  const handleFirstName = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };
  const [popup, setPopup] = useState(false);
  const showPopupHandler = () => {
    setPopup(true);
  };

  return (
    <div>
      <div className="bgRoom  relative h-fit w-full">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Reserve Your Own")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Reservation Point")
                  .start();
              }}
            />
          </h1>
        </div>
        {print === false ? (
          <div className="w-full relative h-fit grid lg:grid-cols-2 items-stretch  text-gray-700 rounded-none py-8   bg-gray-100">
            <div>
              {btn === false ? (
                <div className="card w-96   rounded-none mx-auto  bg-stone-900 hover:bg-stone-900 glass text-gray-300">
                  <figure>
                    <img src={thisRoom.image} alt="" />
                  </figure>
                  <div className="card-body font-mono">
                    <h2 className="card-title m-2">Reserve</h2>
                    <p className="ml-2 text-lg">{thisRoom.name}</p>
                    <p className="m-2 text-lg">Only for ${thisRoom.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn bg-orange-400 font-mono glass w-full "
                        onClick={handleBtn}
                      >
                        Set Arrival : check- in- out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="lg:w-full  flex mx-auto flex-col">
                  <button
                    className="btn bg-orange-400 justify-center hover:bg-stone-800 border-none glass flex items-center gap-2 "
                    onClick={handleClose}
                  >
                    close <FontAwesomeIcon icon={faXmarkCircle} />
                  </button>
                  <DateRangePicker
                    style={style}
                    onChange={(item) => setDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={date}
                    direction="vertical"
                  />
                </div>
              )}
            </div>
            <form className="w-full p-4  gap-4 font-sans flex flex-col justify-start items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-full  justify-start gap-4 items-start">
                <div className="  w-full">
                  <label className="label">
                    <span className="label-text">First Name?</span>
                  </label>
                  <input
                    type="text"
                    onChange={handleFirstName}
                    name="firstName"
                    placeholder="First name"
                    required
                    className="input bg-gray-200 rounded-none input-bordered  h-8 w-full"
                  />
                </div>

                <div className=" w-full">
                  <label className="label">
                    <span className="label-text">Last Name?</span>
                  </label>
                  <input
                    type="text"
                    onChange={handleLastName}
                    name="lastName"
                    placeholder="Last name"
                    className="input bg-gray-200 rounded-none input-bordered  h-8 w-full"
                  />
                </div>

                <div className=" w-full">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    onChange={handleEmail}
                    name="email"
                    placeholder="Email Address"
                    className="input bg-gray-200 rounded-none input-bordered h-8 w-full"
                  />
                </div>

                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Telephone?</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="telephone"
                    onChange={handleTelephone}
                    placeholder="Telephone "
                    className="input bg-gray-200 rounded-none input-bordered  h-8 w-full"
                  />
                </div>
              </div>
              <div className="  text-gray-500 w-full  ">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt  ">SPECIAL REQUESTS</span>
                  </label>
                  <textarea
                    onChange={handleTextarea}
                    className="textarea bg-gray-200 py-8 rounded-none w-full textarea-bordered"
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt  italic">
                      Special requests cannot be guaranteed but we will do our
                      best to meet your needs.
                    </span>
                  </label>
                </div>
                <div className="py-4">
                  <h2 className="uppercase text-xl font-mono">
                    booking details
                  </h2>
                  <p className="w-full flex justify-between items-center p-2">
                    Check-in <span>{showStartDate}</span>
                  </p>
                  <hr />
                  <p className="w-full flex justify-between items-center p-2">
                    Check-out<span>{showEndDate}</span>
                  </p>
                  <hr />
                  <p className="w-full flex justify-between items-center p-2">
                    Pets <span className="italic">Pets Are Not allow</span>
                  </p>
                  <hr />
                </div>
                <div className="gap-4 flex flex-col">
                  <h1 className="uppercase text-xl font-mono ">
                    Your reservation
                  </h1>
                  <p className="bg-gray-200 py-2 text-xl flex justify-between px-4 items-center">
                    <span>Room</span>
                    <span>Cost</span>
                  </p>
                  <p className="text-xl flex justify-between px-4 w-full items-center font-sans">
                    <span>{thisRoom.name}</span>{" "}
                    <span>
                      ${thisRoom.price}{" "}
                      <FontAwesomeIcon
                        className="text-red-500"
                        icon={faXmark}
                      />
                    </span>
                  </p>

                  <p className="text-xl flex justify-between px-4 w-full items-center font-sans">
                    <span>Subtotal :</span> <span>${thisRoom.price}</span>
                  </p>

                  <p className="text-xl flex justify-between px-4 w-full items-center font-sans">
                    <span>Tax Total :</span> <span>$10</span>
                  </p>

                  <p className="text-xl flex justify-between px-4 w-full items-center font-sans">
                    <span>Total :</span> <span>${thisRoom.price + 10}</span>
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  {email === "" &&
                  name === "" &&
                  lastName === "" &&
                  telephone === "" ? (
                    <input
                      type="button"
                      className="bg-orange-400 rounded px-8 text-xl font-mono text-white mt-8 py-2 "
                      onClick={showPopupHandler}
                      value="BOOK NOW"
                    />
                  ) : (
                    <input
                      type="submit"
                      onClick={() => setPrint(true)}
                      value="BOOK NOW"
                      className="bg-orange-400 rounded px-8 text-xl font-mono text-white mt-8 py-2 "
                    />
                  )}
                </div>
              </div>
            </form>
            {popup === false ? "" : <Popup></Popup>}
          </div>
        ) : (
          <div className="w-full relative">
            <CheckoutConfirmation
              startDate={showStartDate}
              endDate={showEndDate}
              textArea={textarea}
              firstName={name}
              lastName={lastName}
              email={email}
              telephone={telephone}
              Guest={thisRoom.guest}
              room={thisRoom}
            ></CheckoutConfirmation>
          </div>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CheckOutPage;
