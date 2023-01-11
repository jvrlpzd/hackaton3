import React from "react";
import car from "../assets/car.png";
import câble from "../assets/HistoryPage/câble.png";
import valises from "../assets/HistoryPage/valises.png";
import clim from "../assets/HistoryPage/clim.png";
import electric from "../assets/HistoryPage/electric.png";
import passagers from "../assets/HistoryPage/passagers.png";
import portes from "../assets/HistoryPage/portes.png";

function CardsHistory() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
        Land Rover Range Rover Velar
      </h2>
      <div className="flex justify-center">
        <img src={car} alt="car" className="h-56" />
      </div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={câble} alt="card" />
          <p>Electrique</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={valises} alt="card" />
          <p>Nb de bagages</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={clim} alt="card" />
          <p>Climatisation</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={electric} alt="card" />
          <p>Essence</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={passagers} alt="card" />
          <p>Nb de passagers</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={portes} alt="card" />
          <p>Nb de portes</p>
        </div>
      </div>
    </div>
  );
}

export default CardsHistory;
