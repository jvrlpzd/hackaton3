/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";

function FormReservation() {
  const [city, setCity] = useState("");

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="flex">
            <div className="-mx-3 flex">
              <div className=" w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600"
                  >
                    <option>-City-</option>
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
            <button type="button" onClick={() => console.log(city)}>
              TEST
            </button>
            <div className="-mx-3 flex">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280]  focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="hover:shadow-form rounded-md bg-[#15133C] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormReservation;
