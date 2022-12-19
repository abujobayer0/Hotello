import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";
import NewsItem from "./NewsItem";
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
  // console.log(
  //   search.filter((m) => m.name.toLowerCase().includes("new") === true)
  // );

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
            <div className="form-control ">
              <div className="input-group ">
                <input
                  id="SearchInput"
                  type="text"
                  placeholder="Search…"
                  className="input w-full md:w-72 lg:w-full input-bordered"
                />
                <button className="btn bg-orange-600  glass hover:bg-orange-600 btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-2 w-full p-4 flex-col">
              <div className=" flex w-full justify-center gap-2">
                <div className="w-28 lg:w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_style_hotel_bed_70002_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28 lg:w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_bed_design_interior_hotel_bedroom_balcony_39708_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28 lg:w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_bed_design_interior_modern_25710_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <div className="w-28 lg:w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_bed_style_interior_design_49197_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28 lg:w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_design_style_interior_modern_67313_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="lg:w-28 w-28 md:w-24">
                  <img
                    className=" w-full"
                    src={
                      "https://images.wallpaperscraft.com/image/single/room_furniture_style_interior_design_66307_1600x900.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
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
