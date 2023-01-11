import React from "react";
import bannerPicture from "../assets/Banner.png";

function Banner() {
  return (
    <div>
      <h1>WILD CAR RENT</h1>
      <img src={bannerPicture} alt="bannerPicture" className="h-100" />
    </div>
  );
}

export default Banner;
