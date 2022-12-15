import React from "react";

const Img = ({ img, htmlFor, handleModal }) => {
  return (
    <div>
      <label onClick={() => handleModal(img)} htmlFor={htmlFor}>
        <img className=" cursor-pointer w-full p-4" src={img} alt="" />
      </label>
    </div>
  );
};

export default Img;
