import React, { useState } from "react";

function SideBar() {
  const Types = [
    { id: 1, name: "-Type-" },
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

  const [type, setType] = useState("");
  return (
    <div className="flex justify-center border text-center border-black ">
      <select
        onChange={(e) => setType(e.target.value)}
        className=" w-auto md:my-2 md:mx-2 text-center p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        {Types.map((types) => (
          <option
            value={types.name}
            className=" sm:text-sm md:text-lg"
            key={types.id}
          >
            {types.name}
          </option>
        ))}
      </select>

      <button onClick={() => console.log(type)} type="button">
        klsdjflksdkf
      </button>
      <select className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Mileage</option>
        <option>0 km - 15 000 km</option>
        <option>15 000 km - 50 000 km</option>
        <option>+ 50 000 km</option>
      </select>
      <select className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Carburant</option>
        <option>Diesel</option>
        <option>Essence</option>
        <option>Electrique</option>
      </select>
    </div>
  );
}

export default SideBar;
