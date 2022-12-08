import React from "react";
import Quantity from "./Quantity";

const CheckRates = () => {
  return (
    <div className="flex w-[80%] absolute bottom-4   h-fit glass px-8 flex-wrap items-center justify-center  gap-8 py-8">
      <div>
        <Quantity></Quantity>
      </div>
      <div>
        <Quantity></Quantity>
      </div>
      <div>
        <Quantity></Quantity>
      </div>
      <div>
        <button className="uppercase text-white bg-stone-700 font-semibold text-md px-8 btn glass">
          Check Rates
        </button>
      </div>
    </div>
  );
};

export default CheckRates;
