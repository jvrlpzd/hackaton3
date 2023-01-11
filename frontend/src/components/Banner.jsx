import React from "react";
import bannerPicture from "../assets/Banner.jpg";

function Banner() {
  return (
    <div className="flex justify-center md:justify-center">
      <h1 className="absolute mt-6 md:mt-28 text-4xl md:text-6xl z-0">
        WILD CAR RENT
      </h1>
      <img src={bannerPicture} alt="bannerPicture" className="h-3/4 w-full" />
    </div>
  );
}

export default Banner;
