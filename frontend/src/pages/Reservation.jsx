/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCarContext } from "../context/carContext";
import cable from "../assets/HistoryPage/câble.png";
import valises from "../assets/HistoryPage/valises.png";
import clim from "../assets/HistoryPage/clim.png";
import essence from "../assets/HistoryPage/essence.png";
import passagers from "../assets/HistoryPage/passagers.png";
import doors from "../assets/HistoryPage/portes.png";
import maps from "../assets/HistoryPage/maps.svg";

function Reservation() {
  const params = useParams();
  const { cars, dateAller, dateRetour } = useCarContext();
  const [reservedCar, setReservedCar] = useState({});

  useEffect(() => {
    const result = cars.filter((car) => car.id === parseInt(params.id, 10));
    setReservedCar(result[0]);
  }, [params]);

  return (
    <div className="ml-10 mt-6 justify-center w-96">
      <div className="w-full mb-10  shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
          {reservedCar.brand} {reservedCar.model}
        </h2>
        <div className="flex justify-center w-full">
          <img src={reservedCar.image} alt="car" className="h-56 w-full" />
        </div>
        <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-5">
          <div className="flex flex-row items-center justify-center my-6">
            <img
              className="h-6 w-6 mr-4"
              src={
                reservedCar.fuel === "Electrique" ? `${cable}` : `${essence}`
              }
              alt="card"
            />
            <p>{reservedCar.fuel}</p>
          </div>
          <div className="flex flex-row items-center justify-center my-6">
            <img className="h-6 w-6 mr-4" src={valises} alt="card" />
            <p>
              {reservedCar.car_type === "Coupe"
                ? "2 suitcases"
                : reservedCar.car_type === "Citadine"
                ? "3 suitcases"
                : "4 suitcases"}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center my-6">
            <img className="h-6 w-6 mr-4" src={clim} alt="card" />
            <p>Yes</p>
          </div>

          <div className="flex flex-row items-center justify-center my-6">
            <img className="h-6 w-6 mr-4" src={passagers} alt="card" />
            <p>
              {reservedCar.car_type === "Coupe"
                ? "2 seats"
                : reservedCar.car_type === "Citadine"
                ? "4 seats"
                : "5 seats"}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center my-6">
            <img className="h-6 w-6 mr-4" src={doors} alt="card" />
            <p>
              {reservedCar.car_type === "Coupe" ||
              reservedCar.car_type === "Sedan" ||
              reservedCar.car_type === "Citadine"
                ? "2 doors"
                : "5 doors"}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center my-6">
            <img className="h-6 w-6 mr-4" src={maps} alt="card" />
            <p>{reservedCar.city}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="hover:shadow-form rounded-md bg-[#15133C] mb-3 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
          >
            <Link to={`/reservation/${reservedCar.id}`}>
              Reserver du {dateAller.split("-").reverse().join("/")} au{" "}
              {dateRetour.split("-").reverse().join("/")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
