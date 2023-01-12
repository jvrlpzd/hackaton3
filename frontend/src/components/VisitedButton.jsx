import React from "react";
import { Link } from "react-router-dom";

function VisitedButton() {
  return (
    <Link to="/">
      <button
        type="button"
        className="bg-[#15133C] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
      >
        VISIT IT
      </button>
    </Link>
  );
}

export default VisitedButton;
