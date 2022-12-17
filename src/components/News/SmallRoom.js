import React from "react";

const SmallRoom = ({ room }) => {
  const { name, price, img } = room;
  return (
    <div className="flex  glass cursor-pointer mt-4 gap-2">
      <div className="w-28 overflow-hidden">
        <img
          src={img}
          className="w-full scale-95 transition-all ease-in-out delay-100 hover:scale-125"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-lg  font-bold  text-slate-600">{name}</h1>
        <p className="text-sm">${price}</p>
      </div>
    </div>
  );
};

export default SmallRoom;