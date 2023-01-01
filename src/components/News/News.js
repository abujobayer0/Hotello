import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

import Footer from "../Home/Shared/Footer/Footer";
import NewsItem from "./NewsItem";
import NewsRow from "./NewsRow";
import SmallRoom from "./SmallRoom";
const News = () => {
  const [news, setNews] = useState([]);
  const [smallRooms, setSmallRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setSmallRooms(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  //   search.filter((m) => m.name.toLowerCase().includes("new") === true)

  return (
    <div className="w-full  flex flex-col  relative bgRoom">
      <div className="w-full flex h-80 justify-center  items-center ">
        <h1 className="text-4xl  py-24 mt-12 lg:mt-12 md:mt-12  lg:py-24 md:py-24 lg:pt-36 md:pt-36 text-white font-semibold">
          {" "}
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Update News")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Hotello New")
                .pauseFor(1000)
                .deleteAll()
                .typeString("News Portal ")
                .start();
            }}
          />
        </h1>
      </div>
      <div className="flex w-full h-fit justify-center">
        <div className="w-full relative h-fit justify-center md:gap-0 gap-12 py-10 bg-gray-100 flex flex-wrap md:flex-nowrap lg:flex-nowrap ">
          {news.length === 7 ? (
            <div className="  px-4  gap-4 flex flex-col">
              {news.map((newsUpdate) => (
                <NewsItem
                  news={newsUpdate}
                  name={newsUpdate.name}
                  detail={newsUpdate.detail}
                  img={newsUpdate.img}
                ></NewsItem>
              ))}
            </div>
          ) : (
            <div className="w-full py-48  flex gap-12 justify-center items-center bg-gray-100 h-96">
              <div
                className="radial-progress glass   animate-spin"
                style={{ "--value": 50 }}
              ></div>
            </div>
          )}
          <div className="w-full px-8">
            <NewsRow></NewsRow>
            <div className="p-4">
              <h1 className="text-2xl  font-semibold text-gray-500">ROOM</h1>
              <div className="">
                {smallRooms.map((room) => (
                  <SmallRoom room={room}> </SmallRoom>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default News;
