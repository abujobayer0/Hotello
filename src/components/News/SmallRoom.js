import React from "react";
import { Link } from "react-router-dom";

const SmallRoom = ({ room }) => {
  const { name, price, image } = room;
  return (
    <div className="flex  glass cursor-pointer mt-4 gap-2">
      <div className="w-28 overflow-hidden">
        <Link to={`/rooms/${room.id}`}>
          <img
            src={image}
            className="w-full scale-95 transition-all ease-in-out delay-100 hover:scale-125"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={`/rooms/${room.id}`}>
          {" "}
          <h1 className="text-lg  font-bold hover:text-orange-400 transition-all ease-in-out text-gray-500">
            {name}
          </h1>{" "}
        </Link>
        <p className="text-sm">${price}</p>
      </div>
    </div>
  );
};

export default SmallRoom;
