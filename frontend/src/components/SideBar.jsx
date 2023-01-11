/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SideBar() {
  const Brands = [
    { id: 1, name: "-Brand-" },
    { id: 2, name: "Alfa Romeo" },
    { id: 3, name: "Audi" },
    { id: 4, name: "Bmw" },
    { id: 5, name: "Citröen" },
    { id: 6, name: "Dacia" },
    { id: 7, name: "Fiat" },
    { id: 8, name: "Ford" },
    { id: 9, name: "Mercedes-Benz" },
    { id: 10, name: "Nissan" },
    { id: 11, name: "Opel" },
    { id: 12, name: "Peugeot" },
    { id: 13, name: "Renault" },
    { id: 14, name: "Seat" },
    { id: 15, name: "Toyota" },
    { id: 16, name: "Volskwagen" },
  ];

  const [brand, setBrand] = useState("");

  const [type, setType] = useState("");

  const [mileage, setMileage] = useState("");

  const [fuel, setFuel] = useState("");

  return (
    <div className="flex justify-center border text-center border-black ">
      <select
        onChange={(e) => setBrand(e.target.value)}
        className=" w-auto md:my-2 md:mx-2 text-center p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        {Brands.map((brands) => (
          <option
            value={brands.name}
            className=" sm:text-sm md:text-lg"
            key={brands.id}
          >
            {brands.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setType(e.target.value)}
        className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 text-center bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option>-Type-</option>
        <option value="Citadine" className=" sm:text-sm md:text-lg">
          Citadine
        </option>
        <option value="SUV" className=" sm:text-sm md:text-lg">
          SUV
        </option>
        <option value="Sedan" className=" sm:text-sm md:text-lg">
          Sedan
        </option>
        <option value="Coupé" className=" sm:text-sm md:text-lg">
          Coupé
        </option>
        <option value="Break" className=" sm:text-sm md:text-lg">
          Break
        </option>
      </select>
      <select
        onChange={(e) => setMileage(e.target.value)}
        className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white text-center border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option className=" sm:text-sm md:text-lg">-Mileage-</option>
        <option value={1} className=" sm:text-sm md:text-lg">
          0 km - 15 000 km
        </option>
        <option value={2} className=" sm:text-sm md:text-lg">
          15 000 km - 50 000 km
        </option>
        <option value={3} className=" sm:text-sm md:text-lg">
          + 50 000 km
        </option>
      </select>
      <select
        onChange={(e) => setFuel(e.target.value)}
        className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white text-center border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option>-Carburant-</option>
        <option value="Diesel" className=" sm:text-sm md:text-lg">
          Diesel
        </option>
        <option value="Essence" className=" sm:text-sm md:text-lg">
          Essence
        </option>
        <option value="Electrique" className=" sm:text-sm md:text-lg">
          Electrique
        </option>
      </select>
    </div>
  );
}

export default SideBar;
