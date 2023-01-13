/* eslint-disable import/no-unresolved */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";
import cable from "../assets/HistoryPage/câble.png";
import valises from "../assets/HistoryPage/valises.png";
import clim from "../assets/HistoryPage/clim.png";
import essence from "../assets/HistoryPage/essence.png";
import passagers from "../assets/HistoryPage/passagers.png";
import doors from "../assets/HistoryPage/portes.png";
import maps from "../assets/HistoryPage/maps.svg";

function Card({ car }) {
  return (
    <div className="w-full mb-10 ml-2  shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
        {car.brand} {car.model}
      </h2>
      <div className="flex justify-center w-full">
        <img src={car.image} alt="car" className="h-56 w-full object-cover" />
      </div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-5">
        <div className="flex flex-row items-center justify-center my-6">
          <img
            className="h-6 w-6 mr-2 ml-4"
            src={car.fuel === "Electrique" ? `${cable}` : `${essence}`}
            alt="card"
          />
          <p>{car.fuel}</p>
        </div>
        <div className="flex flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-2" src={valises} alt="card" />
          <p>
            {car.car_type === "Coupe"
              ? "2 suitcases"
              : car.car_type === "Citadine"
              ? "3 suitcases"
              : "4 suitcases"}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-2" src={clim} alt="card" />
          <p>Yes</p>
        </div>

        <div className="flex flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-2" src={passagers} alt="card" />
          <p>
            {car.car_type === "Coupe"
              ? "2 seats"
              : car.car_type === "Citadine"
              ? "4 seats"
              : "5 seats"}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={doors} alt="card" />
          <p>
            {car.car_type === "Coupe" ||
            car.car_type === "Sedan" ||
            car.car_type === "Citadine"
              ? "2 doors"
              : "5 doors"}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center my-6">
          <img className="h-6 w-6 mr-4" src={maps} alt="card" />
          <p>{car.city}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="hover:shadow-form rounded-md bg-[#15133C] mb-3 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C] transition duration-700 ease-in-out"
        >
          <Link to={`/reservation/${car.id}`}>Reserver</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
