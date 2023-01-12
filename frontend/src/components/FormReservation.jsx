/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardsAll from "./CardsAll";
import SideBar from "./SideBar";
import { useCarContext } from "../context/carContext";

function FormReservation() {
  const [isTrue, setIsTrue] = useState(false);
  const { setCity, dateAller, setDateAller, dateRetour, setDateRetour } =
    useCarContext();

  function showSlideBar() {
    setIsTrue(true);
  }

  return (
    <div className="">
      <div className="mt-[-50px] mx-auto my-4 text-center py-3 md:mt-[-500px] md:pb-4 z-10 flex items-center shadow-sm bg-white  justify-center ">
        <div className="mx-auto  my-4 md:pb-5 pb-1  w-[80%] md:rounded-[20px] md:max-w-[850px] bg-white">
          <form
            type="submit"
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className="-mx-auto md:px-18 my-8  flex flex-wrap">
              <div className="w-full mx-auto px-3 sm:w-1/2">
                <div>
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    className="md:px-2 md:text w-[80%] md:mx-2 text-gray-500 bg-slate-100 border rounded-sm py-3 px-4 shadow-sm outline-none  focus:border-indigo-600"
                  >
                    <option className="sm:text-sm md:text-lg">
                      Choose city
                    </option>
                    <option value="" className=" sm:text-sm md:text-lg">
                      All
                    </option>
                    <option value="Paris" className=" sm:text-sm md:text-lg">
                      Paris
                    </option>
                    <option value="Lille" className=" sm:text-sm md:text-lg">
                      Lille
                    </option>
                    <option value="Lyon" className=" sm:text-sm md:text-lg">
                      Lyon
                    </option>
                    <option value="Bordeaux" className=" sm:text-sm md:text-lg">
                      Bordeaux
                    </option>
                    <option value="Monaco" className=" sm:text-sm md:text-lg">
                      Monaco
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mx-auto flex flex-wrap">
              <div className="w-full mx-auto px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 underline block text-base font-medium text-[#07074D]"
                  >
                    Starting date
                  </label>
                  <input
                    onChange={(e) =>
                      setDateAller(
                        parseInt(e.target.value.split("-").join(""), 10)
                      )
                    }
                    type="date"
                    name="date"
                    id="date"
                    className="w-[100%] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full mx-auto px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 underline block text-base font-medium text-[#07074D]"
                  >
                    Ending date
                  </label>
                  <input
                    onChange={(e) =>
                      setDateRetour(
                        parseInt(e.target.value.split("-").join(""), 10)
                      )
                    }
                    type="date"
                    name="date"
                    id="date"
                    className="w-[100%] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => showSlideBar()}
                type="button"
                className="hover:shadow-form rounded-md bg-[#15133C] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
              >
                <Link to="#ancreCars">SEARCH</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={isTrue ? "border-spacing-0" : "hidden"}>
        <SideBar />
        <CardsAll />
      </div>
    </div>
  );
}
export default FormReservation;
