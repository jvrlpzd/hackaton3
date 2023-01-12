/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditVehicles({ car }) {
  const [dataCar, setDataCar] = useState({
    brand: car.brand,
    model: car.model,
    car_type: car.car_type,
    construction_date: car.construction_date,
    mileage: car.mileage,
    fuel: car.fuel,
    technical_sheet: car.technical_sheet,
    city: car.city,
    needs_repairing: car.needs_repairing,
  });

  const onChange = (e) => {
    setDataCar({
      ...dataCar,
      [e.target.name]: e.target.value,
    });
  };
  const nav = useNavigate();

  const onSubmit = (e) => {
    console.log(dataCar);
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
      fetch(`http://localhost:5000/api/vehicles/${car.id}`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          nav("/adminhome");
        })
        .catch(console.error);
    }
  };

  return (
    <div>
      <div className="bg-white fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden">
        <h1 className="text-[40px] text-[#15133C]font-bold text-center pb-8 mt-16">
          Modifier le vehicule
        </h1>
        <div className="flex justify-center mb-4">
          <img
            className="rounded-full w-36 h-32 border-4 border-violet mr-4"
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
          <label className="flex w-1/2 mx-auto  flex-col text-xl mb-2">
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
            <textarea
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
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="chexbox"
              name="needs_repairing"
              value={dataCar.needs_repairing}
              onChange={onChange}
              placeholder={car.needs_repairing}
            />
          </label>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-[#15133C] text-white py-2 px-[2.5rem] rounded-[20px] w-2/12 text-md mb-4"
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
