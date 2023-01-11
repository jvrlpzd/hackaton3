import React, { useState } from "react";

function FormReservation() {
  const [type, setType] = useState("");
  return (
    <div className="flex items-center justify-center p-12">
      <div className=" mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap">
            <div className=" w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <select
                  onChange={(e) => setType(e.target.value)}
                  className="w-auto p-2.5 md:my-2 md:mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
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
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
        </form>
      </div>
    </div>
  );
}

export default FormReservation;
