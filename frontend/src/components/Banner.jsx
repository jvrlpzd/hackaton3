import React from "react";
import bannerPicture from "../assets/Banner.jpg";

function Banner() {
  return (
    <div className="flex justify-center">
      <h1 className="absolute z-10 mt-28 text-6xl">WILD CAR RENT</h1>
      <img
        src={bannerPicture}
        alt="bannerPicture"
        className="h-3/4 w-full z-0"
      />
    </div>
  );
}

export default Banner;
