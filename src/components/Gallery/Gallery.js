import React from "react";
// Import Swiper React components

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";
import ImagesJs from "./ImagesJS/Images";

const Gallery = () => {
  return (
    <div className="relative w-full h-fit">
      <div className=" w-full  flex flex-col   bgRoom">
        <div className="w-full  flex h-80 justify-center  items-center ">
          <h1 className="text-4xl  py-24 mt-12 lg:mt-12 md:mt-12  lg:py-24 md:py-24 lg:pt-36 md:pt-36 text-white font-semibold">
            {" "}
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Our Hotel Images")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Fancy Gallery")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Gallery Hotello ")
                  .start();
              }}
            />
          </h1>
        </div>

        <div className="  bg-gray-100 relative w-full h-fit">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </SwiperSlide>
          </Swiper>
          <div className="w-full relative max-h-full">
            <h1 className="text-2xl">GALLERY</h1>

            <ImagesJs></ImagesJs>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Gallery;
