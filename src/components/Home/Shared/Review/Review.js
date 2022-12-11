import { faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import User from "./User";
import userOne from ".././../../images/Clint Logo/inspired-african-lady-dancing-with-eyes-closed-indoor-portrait-relaxed-black-girl-isolated.jpg";
import userTwo from ".././../../images/Clint Logo/portrait-pretty-lady-red-warm-jacket-stylish-eyeglasses.jpg";
import userThree from ".././../../images/Clint Logo/trendy-attractive-woman-with-wavy-hairstyle-with-modern-cool-earrings-big-red-lips-green-sundress-looking-into-camera.jpg";
const Review = () => {
  return (
    <div className="w-full relative pb-12 h-fit py-8 text-stone-700 flex flex-col justify-center items-center bg-gray-100">
      <FontAwesomeIcon className="text-5xl" icon={faUsersBetweenLines} />
      <h1 className="text-4xl py-2">Customer Review</h1>
      <div className="w-full px-8 pt-8">
        <div className="grid grid-cols-1  md:grid-col-2 lg:grid-cols-3 px-4 gap-8 ">
          <User
            review="Fruitful tree saying firmament seed morning rule man creepeth be made had creeping let can't gathering his lesser  . Upon they're seasons green day beast without form man be firmament years shall the appear moventh signs had."
            name="Dalmon S.Morris"
            position="CEO AT ENTAVO LLC"
            img={userOne}
          ></User>
          <User
            review="Fruitful tree saying firmament seed morning rule man creepeth be made had creeping let can't gathering his lesser . Upon they're seasons green day beast without form man be firmament years shall the appear moventh signs had."
            name="Dalmon S.Morris"
            position="CEO AT ENTAVO LLC"
            img={userTwo}
          ></User>
          <User
            review="Fruitful tree saying firmament seed morning rule man creepeth be made had creeping let can't gathering his lesser . Upon they're seasons green day beast without form man be firmament years shall the appear moventh signs had."
            name="Dalmon S.Morris"
            position="CEO AT ENTAVO LLC"
            img={userThree}
          ></User>
        </div>
      </div>
    </div>
  );
};

export default Review;
