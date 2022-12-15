import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import BookEarly from "../Home/Shared/BookEarly/BookEarly";
import Collapse from "./Collapse";
import Img from "./Img";
const About = () => {
  const [imgModal, setImgModal] = useState([]);
  const images = [
    "https://images.unsplash.com/photo-1540760029765-138c8f6d2eac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];
  const collapse = [
    {
      name: "Perform value engineering",
      detail:
        "Value engineering is based on a methodology developed by Lawrence Mines, who worked for the General Nizer Company in the USA during the Second World War. Because of the war, there were shortages of materials and certain finished products.Hath let set every, them a every bearing have it. Living own night male in life given herb kind of cattle bearing beginning without morning god. Void rule Night gathering also open let, saw you’ll our. Yielding Won’t were wherein.",
    },
    {
      name: "Dreaming of Flying",
      detail:
        "Forth of. Good good isn’t air that divide appear may hath. Life you’re given be and male. All can’t rule void grass hath land shall thing gathering. Void dry. A waters likeness can’t lesser place.Very them second divided appear signs wherein, brought him had doesn’t sea blessed and moving. Saying blessed. Night spirit saw winged. Third set subdue male made given, air fifth over. There god days divide. Multiply that don’t moving replenish morning let also lights wherein abundantly.",
    },
    {
      name: "Witch of Hunter",
      detail:
        "Fruitful divide first saying gathering dominion there bring. Cattle whales. Heaven rule, upon doesn’t a have is him moved divided very god yielding so i light unto void gathered had you’re for may great him a to man meat meat, land saying for don’t One. Let dominion.Lesser appear heaven Meat moving lesser night light image midst. Have life. Beast moveth whose green the beginning without, meat living. Set Also creepeth fish, had moveth. Over multiply you’ll you’re lesser was.",
    },
    {
      name: "Way in Cloud",
      detail:
        "Divided behold. Face moving open void whales night, in form likeness were fly grass waters yielding which it unto seas creature won’t tree i fill dominion have, place man they’re image, and. All evening fly signs open good.Said give, void from day evening fruit saying. Fill morning let give fifth itself. Itself gathered he fourth herb midst don’t whose. Second said whales bring and. Signs. Signs above over. Forth one. Evening female whales firmament male heaven from made, sea.",
    },
    {
      name: "Weeping Voyagers",
      detail:
        "Female were sea dry. Divided shall heaven brought days fowl moving image fowl man let herb. Divided. Shall fifth day years. That set one divided living to together saying there one, give abundantly. Let living said.Own thing living dry also darkness bearing to multiply two light won’t. Whales the have Spirit. Brought place fill winged above fly moving fourth after form from, his brought created given so cattle dry, subdue isn’t after had. Open sea appear beginning upon together.",
    },
  ];
  const handleModal = (e) => {
    setImgModal(e);
  };
  return (
    <div className=" w-full flex flex-col  relative bgRoom">
      <div className="w-full flex h-80 justify-center  items-center ">
        <h1 className="text-4xl  py-24 mt-12 lg:mt-12 md:mt-12  lg:py-24 md:py-24 lg:pt-36 md:pt-36 text-white font-semibold">
          {" "}
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Our Services")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Happy Customer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Best For You ")
                .start();
            }}
          />
        </h1>
      </div>
      <div className="bg-gray-100">
        <div className="flex p-8 h-fit  lg:h-80 md:h-fit flex-wrap justify-center gap-12 items-center">
          <h1 className="text-4xl">
            <span className="text-orange-400">Everything.</span>
            <br /> Right where <br /> you need it.
          </h1>
          <p className="text-lg text-gray-500">
            A wonderful serenity has taken possession <br /> of my entire soul
            charm, like these so sweet <br /> mornings of spring which I enjoy
            with mines <br /> whole heart. I feel charm of existence in this
            <br /> spot, of souls like mine. I am so happy, dear.
          </p>
          <p className="text-lg text-gray-500">
            When, while the lovely valley teems with <br /> vapour around me,
            the upper surface of the <br />
            <Link to={"/contact"}>
              <a className="text-orange-400">impenetrable foliage</a>
            </Link>
            of my trees, and but a <br /> few stray gleams steal into the inner{" "}
            <br /> sanctuar.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap p-4 bg-gray-200 w-full">
          {images.map((img) => (
            <Img handleModal={handleModal} htmlFor="my-modal-3" img={img}></Img>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-center md:flex-nowrap lg:flex-nowrap p-8">
          <div>
            {collapse.map((c) => (
              <Collapse name={c.name} detail={c.detail}></Collapse>
            ))}
          </div>
          <div className="w-full relative">
            <img
              className="w-full  scale-105 m-1 px-2"
              src="https://images.unsplash.com/photo-1559081623-8ce23ec117d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              alt=""
            />
            <div className="w-full  top-0 px-4 h-full bg-opacity-50 text-white bg-stone-800 absolute flex flex-col justify-center items-center">
              <h1>
                <FontAwesomeIcon className="text-5xl p-2" icon={faBurger} />
              </h1>
              <h1 className="text-2xl  p-2">All Include</h1>
              <p className="text-center">
                We Provide the best value to our customers by continuously
                refining our processes and cost structure.
              </p>
            </div>
          </div>
        </div>
        <BookEarly></BookEarly>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm border-none m-2 glass bg-orange-500 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={imgModal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
