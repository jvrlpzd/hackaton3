/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EditVehicles from "./EditVehicles";
import { useCurrentUserContext } from "../../context/userContext";

function ItemVehicle({ car, handleDelete }) {
  const [editPostModal, setEditPostModal] = useState(false);
  const { user } = useCurrentUserContext();

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
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-red-400 text-white">
        {car.needs_repairing ? "YES" : ""}
      </th>
      <div className=" w-28 rounded-md shadow-lg mb-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {user.role === "admin" && (
          <>
            <button
              onClick={() => handleEditPostModal()}
              className="text-black p-2 flex"
              type="button"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(car.id)}
              className="text-black p-2 flex"
              type="submit"
            >
              Supprimer
            </button>
          </>
        )}
        {user.role === "mecano" && car.needs_repairing && (
          <button
            onClick={() => handleEditPostModal()}
            className="text-black p-2 flex"
            type="button"
          >
            Voiture reparée
          </button>
        )}
      </div>
      {editPostModal ? (
        <EditVehicles setEditPostModal={setEditPostModal} car={car} />
      ) : null}
    </tr>
  );
}

export default ItemVehicle;
