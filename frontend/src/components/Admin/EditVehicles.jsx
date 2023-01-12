/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function EditVehicles({ car }) {
  return (
    <div>
      <div className="bg-white fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden">
        <h1 className="text-[32px] text-primary font-bold text-center pb-8">
          Modifier le vehicule
        </h1>
        <div className="flex justify-center">
          <img
            className="rounded-full w-36 border-4 border-violet mr-4"
            src={car.image}
            alt="My profile avatar"
          />
          <div className="flex flex-col justify-evenly">
            <button
              type="button"
              className="bg-black text-white py-3 px-[2.5rem] rounded-[20px]"
            >
              Changer
            </button>
            <button
              type="button"
              className="bg-white border border-black text-primary py-3 px-[2.5rem] rounded-[20px]"
            >
              Supprimer
            </button>
          </div>
        </div>
        <form className="grid grid-cols-2 justify-center  items-center">
          <label className="flex w-1/2 mx-auto  flex-col text-xl mb-2">
            Brand :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.brand}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Model :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.model}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-xl mb-2">
            Car Type :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.car_type}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Construction date :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.construction_date}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-xl mb-2">
            Mileage :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.mileage}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Fuel :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.fuel}
            />
          </label>
          <label className="flex w-1/2 flex-col mx-auto text-xl mb-2">
            Tech Sheet :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.technical_sheet}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            City :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder={car.city}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col  text-xl mb-2">
            Needs repairing :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="chexbox"
              placeholder={car.needs_repairing}
            />
          </label>
        </form>
        <div className="text-center mt-8">
          <Link to="/adminhome">
            <button
              type="button"
              className="bg-black text-white py-3 px-[2.5rem] rounded-[20px] w-6/12 text-md mb-4"
            >
              Enregistrer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditVehicles;
