/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import SideBar from "./SideBar";

function FormReservation() {
  const [city, setCity] = useState("");

  const [isTrue, setIsTrue] = useState(false);

  function showSlideBar() {
    setIsTrue(!isTrue);
  }

  return (
    <div>
      <div className="mt-[-100px] mx-auto my-4 text-center py-3 md:mt-[-280px] z-10 flex items-center shadow-sm bg-white  justify-center rounded-xl p-12">
        <div className="mx-auto my-4  w-full md:max-w-[850px] bg-white">
          <form
            type="submit"
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className="-mx-auto md:px-18 my-8  flex flex-wrap">
              <div className="w-full mx-auto px-3 sm:w-1/2">
                <div className="mb-5 mx-auto  py-3 flex justify-center rounded-md border border-[#e0e0e0]">
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    className="w-auto md:px-6 md:text-lg md:mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600"
                  >
                    <option className="sm:text-sm md:text-lg">-City-</option>
                    <option value="All" className=" sm:text-sm md:text-lg">
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
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date Aller
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full mx-auto px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date Retour
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {isTrue ? (
        <div>
          <SideBar />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormReservation;
