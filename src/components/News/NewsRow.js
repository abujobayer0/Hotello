import React from "react";

const NewsRow = () => {
  return (
    <div>
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
    </div>
  );
};

export default NewsRow;
