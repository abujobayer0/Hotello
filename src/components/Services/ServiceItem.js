import React from "react";

const ServiceItem = ({ name, img, detail, price }) => {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={img}
            className=" hover:scale-150 scale-110 ease-in-out duration-500"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge glass bg-stone-800 hover:bg-stone-800">
              ${price}
            </div>
          </h2>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
