/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from "react";
import { useCarContext } from "../../context/carContext";

import EditVehicles from "./EditVehicles";

function AdminHome() {
  const {
    cars,
    setCars,

    editPostModal,
    setEditPostModal,
  } = useCarContext();

  const handleEditPostModal = () => {
    setEditPostModal(!editPostModal);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then(
        (result) => {
          setCars(result);
        },
        [cars]
      );
  });
  return (
    <div>
      <div className=" flex-wrap bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-xl">
        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <div className="flex-grow flex overflow-x-hidden">
            <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
              <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
                <div className="flex w-full items-center">
                  <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                    <img
                      src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
                      className="w-12 mr-4 rounded-full"
                      alt="profile"
                    />
                    ADMIN
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                  <a
                    href="/"
                    className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5"
                  >
                    Vehicles
                  </a>
                  <a
                    href="/"
                    className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5"
                  >
                    Users
                  </a>
                  <a
                    href="/"
                    className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Reservations
                  </a>
                  <a
                    href="/"
                    className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Mails
                  </a>
                </div>
              </div>
              <div className="sm:p-7 flex flex-wrap">
                <table className="w-full text-left">
                  <thead className="text-gray-600 dark:text-gray-100">
                    <tr>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Brand</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Model</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Car type</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">
                          Construction date
                        </div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Mileage</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Fuel</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Tech sheet</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">City</div>
                      </td>
                      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">Needs repairing</div>
                      </td>
                    </tr>
                  </thead>
                  {cars.map((car) => (
                    <tbody key={car.id}>
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
                        <div>
                          <div className=" w-28 rounded-md shadow-lg mb-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <button
                              onClick={() => handleEditPostModal()}
                              className="text-black p-2 flex"
                              type="button"
                            >
                              Modifier
                            </button>

                            {editPostModal ? (
                              <EditVehicles
                                editPostModal={editPostModal}
                                setEditPostModal={setEditPostModal}
                                handleEditPostModal={handleEditPostModal}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
