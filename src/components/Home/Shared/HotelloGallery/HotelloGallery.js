import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWind,
  faWindowClose,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import imageOne from ".././../../images/Caousel/pexels-azri-suratmin-122244.jpg";
import imageTwo from ".././../../images/Caousel/pexels-caio-6144876.jpg";
import imageThree from ".././../../images/Caousel/pexels-elevate-1267320.jpg";
import imageFour from ".././../../images/Caousel/pexels-kendall-hoopes-635041.jpg";
const HotelloGallery = () => {
  return (
    <div className="w-full flex-col bg-stone-900 glass flex justify-center items-center py-8 hover:bg-stone-900 h-screen">
      <FontAwesomeIcon className="text-4xl text-gray-100" icon={faWind} />
      <h1 className="text-5xl text-gray-100 py-4">Hotello Gallery</h1>
      <div className="carousel w-11/12 h-10/12">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imageOne} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imageTwo} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imageThree} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imageFour} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn glass bg-stone-800 hover:bg-stone-800 w-16 lg:w-20 md:w-20 lg:h-16 md:h-16 h-12"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelloGallery;
