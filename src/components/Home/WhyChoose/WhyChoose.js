import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Choose from "../Shared/Choose/Choose";

const WhyChoose = () => {
  return (
    <div className="w-full pb-20  bg-gray-200">
      <div className="pb-8">
        <h1 className="text-4xl text-center pt-8 text-stone-700">
          <FontAwesomeIcon icon={faHashtag} />
        </h1>
        <h1 className="text-4xl text-center  ">Why Choose Us</h1>
        <p className="text-md py-4 text-center">
          Of is apper in face creeping and whose don't blessed. <br />
          Female Our herb you'll female earth second moveth.
        </p>
      </div>
      <div className="">
        <Choose></Choose>
      </div>
    </div>
  );
};

export default WhyChoose;
