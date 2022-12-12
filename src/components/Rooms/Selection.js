import React from "react";

const Selection = ({
  selection,
  option,
  optionone,
  status,
  optiontwo,
  optionthree,
  normal,
  handler,
  optionFour,
}) => {
  return (
    <div className=" px-4 flex flex-col  justify-center items-center">
      <h3 className="text-lg text-gray-100 mb-2">{selection}</h3>
      <div className=" flex text-gray-100 glass justify-center items-center w-full">
        <button onClick={() => handler(0)} className="w-fit  px-4 text-sm py-2">
          {normal}
        </button>
        <button onClick={() => handler(1)} className="w-fit  px-4 text-sm py-2">
          {optionone}
        </button>
        <button onClick={() => handler(2)} className="w-fit  px-4 text-sm py-2">
          {optiontwo}
        </button>
        <button onClick={() => handler(3)} className="w-fit  px-4 text-sm py-2">
          {optionthree}
        </button>
        <button onClick={() => handler(4)} className={status}>
          {optionFour}
        </button>
      </div>
    </div>
  );
};

export default Selection;
