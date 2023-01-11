import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/car.png";
import voiture from "../assets/HistoryPage/VOITURE.jpg";
import câble from "../assets/HistoryPage/câble.png";
import valises from "../assets/HistoryPage/valises.png";
import clim from "../assets/HistoryPage/clim.png";
import electric from "../assets/HistoryPage/electric.png";

function MyHistory() {
  return (
    <ul className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-5 md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-5 mx-6">
      <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
        <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
          Land Rover Range Rover Velar
        </h2>
        <div className="flex justify-center">
          <img src={voiture} alt="car" className="h-full" />
        </div>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-5">
          <div className="flex flex-col">
            <img className="" src={câble} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={valises} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={clim} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={electric} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            VOIR
          </button>
        </Link>
      </li>
      <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
        <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
          NOM DE LA VOITURE
        </h2>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-5">
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            VOIR
          </button>
        </Link>
      </li>
      <li className="box row-start-2 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
        <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
          NOM DE LA VOITURE
        </h2>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-5">
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            VOIR
          </button>
        </Link>
      </li>
      <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
        <h2 className="text-xl md:text-2xl font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
          NOM DE LA VOITURE
        </h2>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-5">
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
          <div className="flex flex-col">
            <img className="" src={car} alt="card" />
            <p>Electrique</p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            VOIR
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default MyHistory;
