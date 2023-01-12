/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EditVehicles from "./EditVehicles";

function ItemVehicle({ car }) {
  const [editPostModal, setEditPostModal] = useState(false);

  const handleEditPostModal = () => {
    setEditPostModal(!editPostModal);
  };

  return (
    <tr className="text-gray-400">
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {car.brand}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {car.model}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
        {car.car_type}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {car.construction_date}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {car.mileage}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {car.fuel}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {car.technical_sheet}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {car.city}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {car.needs_repairing}
      </th>
      <div className=" w-28 rounded-md shadow-lg mb-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <button
          onClick={() => handleEditPostModal()}
          className="text-black p-2 flex"
          type="button"
        >
          Modifier
        </button>
        <button className="text-black p-2 flex" type="button">
          Supprimer
        </button>
      </div>
      {editPostModal ? (
        <EditVehicles setEditPostModal={setEditPostModal} car={car} />
      ) : null}
    </tr>
  );
}

export default ItemVehicle;
