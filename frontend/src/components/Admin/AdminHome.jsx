import React from "react";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <h1 className="text-4xl text-center my-20">Bienvenue, Chloé !</h1>
      <div className="flex flex-col items-center justify-around">
        <Link
          className="w-1/2 h-5/6 px-20 text-xl text-center py-10 shadow-md rounded-xl mb-8 bg-[#F8F5F5]"
          to="/adminvehicles"
        >
          <button type="button">Vehicle management</button>
        </Link>
        <button
          type="button"
          className="w-1/2 h-5/6 shadow-md rounded-xl py-10 mb-8 text-xl bg-[#F8F5F5]"
        >
          User management
        </button>
        <button
          type="button"
          className="w-1/2 h-5/6 shadow-md rounded-xl py-10 text-xl bg-[#F8F5F5]"
        >
          Reservation management
        </button>
      </div>
    </div>
  );
}

export default AdminHome;
