import React from "react";

const NewsItem = ({ img, name, detail }) => {
  return (
    <div>
      <div className="card p-2 lg:card-side delay-75 ease-in-out transition-shadow bg-base-100 hover:shadow-lg">
        <figure>
          <img src={img} className=" w-full" alt="Album" />
        </figure>
        <div className="card-body px-2">
          <h2 className="card-title">{name}</h2>
          <p className="w-96 relative">{detail}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
