import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWind,
  faWindowClose,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy } from "react";
import ReactImageGallery from "react-image-gallery";
import imageOne from ".././../../images/Caousel/pexels-azri-suratmin-122244.jpg";
import imageTwo from ".././../../images/Caousel/pexels-caio-6144876.jpg";
import imageThree from ".././../../images/Caousel/pexels-elevate-1267320.jpg";
import imageFour from ".././../../images/Caousel/pexels-kendall-hoopes-635041.jpg";
import imageFive from ".././../../images/Caousel/pexels-pixabay-271624.jpg";
const HotelloGallery = () => {
  const images = [
    {
      original: imageOne,
      thumbnail: imageOne,
    },
    {
      original: imageTwo,
      thumbnail: imageTwo,
    },
    {
      original: imageThree,
      thumbnail: imageThree,
    },
    {
      original: imageFour,
      thumbnail: imageFour,
    },
    {
      original: imageFive,
      thumbnail: imageFive,
    },
  ];
  return (
    <div className="w-full px-8  flex-col h-fit bg-stone-900 glass flex justify-center items-center py-8 hover:bg-stone-900 ">
      <FontAwesomeIcon className="text-4xl text-gray-100" icon={faWind} />
      <h1 className="text-5xl text-gray-100 py-4">Hotello Gallery</h1>
      <ReactImageGallery
        showNav={Boolean}
        showBullets={true}
        showIndex={true}
        items={images}
      />
    </div>
  );
};

export default HotelloGallery;
