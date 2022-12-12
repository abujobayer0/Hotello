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
    <div className=" px-2 flex flex-col w-full  justify-center items-center">
      <h3 className="text-lg text-gray-100 bg-stone-800 glass hover:bg-stone-800 py-2 w-full mb-2">
        {selection}
      </h3>
      <div className=" flex text-gray-100 w-full glass hover:bg-orange-600 bg-orange-600 justify-center items-center ">
        <button
          onClick={() => handler(0)}
          className="w-full focus:bg-stone-600    px-2 text-sm py-2"
        >
          {normal}
        </button>

        <button
          id="btn1"
          onClick={() => handler(1)}
          className="w-full focus:bg-stone-600   px-2 text-sm py-2"
        >
          {optionone}
        </button>

        <button
          id="btn2"
          onClick={() => handler(2)}
          className="w-full focus:bg-stone-600    px-2 text-sm py-2"
        >
          {optiontwo}
        </button>

        <button
          id="btn3"
          onClick={() => handler(3)}
          className="w-full focus:bg-stone-600   px-2 text-sm py-2"
        >
          {optionthree}
        </button>

        <button id="btn4" onClick={() => handler(4)} className={status}>
          {optionFour}
        </button>
      </div>
    </div>
  );
};

export default Selection;
