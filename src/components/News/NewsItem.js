import React from "react";

const NewsItem = ({ img, name, detail }) => {
  return (
    <div>
      <div className="flex flex-col text-slate-600 lg:flex-row md:flex-row  card-side  hover:shadow-xl glass  delay-150 ease-in-out transition-all">
        <figure className="relative">
          <img
            src={
              "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
            }
            alt=""
          />
        </figure>
        <div className="relative flex flex-col items-start justify-between p-4">
          <h2 className="card-title">{name}</h2>
          <p>{detail}</p>

          <div className="w-full p-0 items-end  flex justify-end mt-4">
            <h1 className="text-md hover:bg-orange-600 bg-orange-600 w-fit h-fit px-4 py-2 relative text-center  glass text-white ">
              August 3,2022
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
