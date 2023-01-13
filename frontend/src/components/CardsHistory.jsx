/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import cable from "../assets/HistoryPage/câble.png";
import valises from "../assets/HistoryPage/valises.png";
import clim from "../assets/HistoryPage/clim.png";
import essence from "../assets/HistoryPage/essence.png";
import passagers from "../assets/HistoryPage/passagers.png";
import portes from "../assets/HistoryPage/portes.png";

function CardsHistory({ car }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
        {car[0].brand} {car[0].model} ({car[0].city})
      </h2>
      <div className="flex justify-center">
        <img src={car[0].image} alt="car" className="h-56" />
      </div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img
            className="h-6 w-6 mr-4 mb-4"
            src={car[0].fuel === "Electrique" ? `${cable}` : `${essence}`}
            alt="card"
          />
          <p>{car[0].fuel}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4 mb-4" src={valises} alt="card" />
          <p>
            {car[0].car_type === "Coupe"
              ? "2 suitcases"
              : car[0].car_type === "Citadine"
              ? "3 suitcases"
              : "4 suitcases"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4 mb-4" src={clim} alt="card" />
          <p>Yes</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4 mb-4" src={passagers} alt="card" />
          <p>
            {car[0].car_type === "Coupe"
              ? "2 seats"
              : car[0].car_type === "Citadine"
              ? "4 seats"
              : "5 seats"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4 mb-4" src={portes} alt="card" />
          <p>{car[0].car_type === "Coupe" ? "2 doors" : "5 doors"}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsHistory;
