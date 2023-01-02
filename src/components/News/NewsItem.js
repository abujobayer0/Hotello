import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ img, name, news, detail }) => {
  return (
    <div>
      <Link to={`/news/${news.id}`}>
        <div className="card p-2 lg:card-side glass delay-75 ease-in-out transition-shadow bg-base-100 hover:shadow-lg">
          <figure>
            <img src={img} className=" w-full" alt="Album" />
          </figure>
          <div className="card-body px-2">
            <h2 className="card-title hover:text-orange-400 transition-all ease-in-out">
              {name}
            </h2>
            <p className="w-96 relative">{detail}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
