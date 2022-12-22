import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

import Footer from "../Home/Shared/Footer/Footer";

import newsData from "./newsData";
import NewsRow from "./NewsRow";
import SmallRoom from "./SmallRoom";
import productsData from "../Rooms/productsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
const NewsDetail = () => {
  const { newsId } = useParams();
  const id = parseInt(newsId);

  const thisNews = newsData.find((room) => room.id === id);

  return (
    <div>
      <div className="bgRoom  w-full">
        <div className="w-full flex h-80 justify-center pt-12 lg:pt-20 md:pt-20 items-center ">
          <h1 className="text-4xl px-12 text-center text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Room Details ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Check out Page")
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="w-full justify-center flex gap-2 flex-wrap lg:flex-nowrap  py-4 px-8  h-fit  text-gray-700   bg-gray-100">
          <div>
            <img className="p-2" src={thisNews.img} alt="" />
            <div>
              <p className="lg:text-lg text-md p-2 text-center">
                {thisNews.detail}
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl  text-gray-500 p-4">
                Leave a comment <FontAwesomeIcon icon={faComment} />
              </h1>
              <div className="flex  relative w-full justify-center items-center bg-gray-200 px-4 py-8 gap-8 flex-col ">
                <textarea
                  className="textarea w-full  bg-gray-100 textarea-bordered"
                  placeholder="Message"
                ></textarea>
                <div className="flex w-full  gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-gray-100 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input bg-gray-100 input-bordered w-full "
                  />
                </div>
                <button className="btn w-52  bg-orange-400 border-none ">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex lg:flex-col">
            <NewsRow></NewsRow>
            {productsData.map((room) => (
              <SmallRoom room={room}></SmallRoom>
            ))}
            {/* <SmallRoom></SmallRoom> */}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default NewsDetail;
