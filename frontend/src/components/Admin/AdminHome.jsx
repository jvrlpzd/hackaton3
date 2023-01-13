/* eslint-disable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddVehicle from "./AddVehicle";
import ItemVehicle from "./ItemVehicle";

function AdminHome() {
  const [cars, setCars] = useState([]);

  const [editPostModal, setEditPostModal] = useState(false);

  const handleEditPostModal = () => {
    setEditPostModal(!editPostModal);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((result) => {
        setCars(result);
      });
  }, []);

  /* const deleteFromList = (id) => {
    // recupérer l'index de la voiture a supprimer
    // slice la voiture correspondant à l'index
   // re-render le composant pour afficher la liste de voitures modifiée
  }; */

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/vehicles/${id}`)
      .then((response) => {
        response.data();
        Navigate("/adminhome");
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          console.warn("Vehicle deleted with success", { type: "error" });
        }
      });
  };

  const [filterSearch, setFilterSearch] = useState("");

  function handleSearch(e) {
    let value = e.target.value;
    setFilterSearch(value);
  }

  return (
    <div>
      <div className=" flex-wrap bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-xl">
        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <div className="flex-grow flex overflow-x-hidden">
            <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
              <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
                <div className="flex w-full items-center">
                  <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                    <div className="flex justify-between items-center"></div>
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
                  <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Rechercher..."
                    class="rounded-full border border-blue-500 pl-4"
                  />
                </div>
              </div>
              <div className="sm:p-7 flex flex-wrap">
                <table className="w-full text-left">
                  <thead className=" text-gray-600   bg-white  dark:text-gray-100">
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
                      <div className=" w-28 rounded-md shadow-lg mb-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <button
                          onClick={() => handleEditPostModal()}
                          className="text-black p-2 flex"
                          type="button"
                        >
                          Ajouter
                        </button>
                      </div>
                      {editPostModal ? (
                        <AddVehicle setEditPostModal={setEditPostModal} />
                      ) : null}
                    </tr>
                  </thead>
                  <tbody>
                    {cars
                      .filter((car) => {
                        return car.brand
                          .toLowerCase()
                          .includes(filterSearch.toLowerCase());
                      })
                      .map((car) => (
                        <ItemVehicle
                          key={car.id}
                          car={car}
                          handleDelete={handleDelete}
                        />
                      ))}
                  </tbody>
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
