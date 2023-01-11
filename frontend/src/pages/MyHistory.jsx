import React from "react";
import { Link } from "react-router-dom";
import CardsHistory from "../components/CardsHistory";
import ViewButton from "../components/ViewButton";

function MyHistory() {
  return (
    <ul className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-5 md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-5 mx-6">
      <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
        <CardsHistory />
        <Link to="/">
          <ViewButton />
        </Link>
      </li>
      <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
        <CardsHistory />
        <Link to="/">
          <ViewButton />
        </Link>
      </li>
      <li className="box row-start-2 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
        <CardsHistory />
        <Link to="/">
          <ViewButton />
        </Link>
      </li>
      <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
        <CardsHistory />
        <Link to="/">
          <ViewButton />
        </Link>
      </li>
    </ul>
  );
}

export default MyHistory;
