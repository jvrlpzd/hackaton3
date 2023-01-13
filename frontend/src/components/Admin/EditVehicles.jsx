/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function EditVehicles({ car, setEditPostModal }) {
  const [dataCar, setDataCar] = useState({
    brand: "",
    model: "",
    car_type: "",
    construction_date: "",
    mileage: "",
    fuel: "",
    technical_sheet: "",
    city: "",
    needs_repairing: "",
  });

  const handleEditPostModal = () => {
    setEditPostModal(false);
  };

  const onChange = (e) => {
    setDataCar({
      ...dataCar,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(dataCar);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
    };
    if (
      dataCar.brand ||
      dataCar.model ||
      dataCar.car_type ||
      dataCar.construction_date ||
      dataCar.mileage ||
      dataCar.fuel ||
      dataCar.technical_sheet ||
      dataCar.city ||
      dataCar.needs_repairing
    ) {
      // On appelle le back. Si tous les middleware placé sur la route ci-dessous, je pourrais être renvoyé à la route login
      fetch("http://localhost:5000/api/vehicles/:id", requestOptions)
        .then((response) => response.text())
        .then(() => {
          Navigate("/adminhome");
        })
        .catch(console.error);
    }
  };

  return (
    <div>
      <div className="bg-white fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden">
        <button
          onClick={() => {
            handleEditPostModal();
          }}
          type="button"
        >
          <img
            className="ml-7 mt-5 w-7 h-7"
            src="./src/assets/close.png"
            alt="Close"
          />
        </button>
        <h1 className="text-[40px] text-[#15133C] font-bold text-center pb-8 mt-8">
          Modify vehicle
        </h1>
        <div className="flex justify-center mb-4">
          <img
            className="rounded-full w-36 h-36 border-4 border-violet mr-4"
            src={car.image}
            alt="Car"
          />
          <div className="flex flex-col justify-evenly">
            <button
              type="button"
              className="bg-[#15133C] text-white py-3 px-[2.5rem] rounded-[20px]"
            >
              Changer
            </button>
          </div>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          method="PUT"
          className="grid grid-cols-2 justify-center  items-center"
        >
          <label className="flex w-1/2 mx-auto flex-col text-xl mb-2">
            Brand :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="brand"
              value={dataCar.brand}
              onChange={onChange}
              placeholder={car.brand}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Model :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="model"
              value={dataCar.model}
              onChange={onChange}
              placeholder={car.model}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-xl mb-2">
            Car Type :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="car_type"
              value={dataCar.car_type}
              onChange={onChange}
              placeholder={car.car_type}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Construction date :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="construction_date"
              value={dataCar.construction_date}
              onChange={onChange}
              placeholder={car.construction_date}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col text-xl mb-2">
            Mileage :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="mileage"
              value={dataCar.mileage}
              onChange={onChange}
              placeholder={car.mileage}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Fuel :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="fuel"
              value={dataCar.fuel}
              onChange={onChange}
              placeholder={car.fuel}
            />
          </label>
          <label className="flex w-1/2 flex-col mx-auto text-xl mb-2">
            Tech Sheet :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="technical_sheet"
              value={dataCar.technical_sheet}
              onChange={onChange}
              placeholder={car.technical_sheet}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            City :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="city"
              value={dataCar.city}
              onChange={onChange}
              placeholder={car.city}
            />
          </label>
          <label className="flex w-1/2 mx-auto flex-col  text-xl mb-2">
            Needs repairing :
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value={dataCar.needs_repairing}
                onChange={onChange}
                checked={car.needs_repairing}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </label>

          <div className="text-center mt-8">
            <button
              type="button"
              className="bg-[#15133C] text-white py-2 px-[2.5rem] rounded-[20px] w-3/12 text-md mb-4"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditVehicles;
