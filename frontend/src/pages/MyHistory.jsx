import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardsHistory from "../components/CardsHistory";
import ViewButton from "../components/ViewButton";
import { useCurrentUserContext } from "../context/userContext";
import { useCarContext } from "../context/carContext";

function MyHistory() {
  const { user } = useCurrentUserContext();
  const { cars, setCars, bookedReservations, setBookedReservations } =
    useCarContext();

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((result) => {
        setCars(result);
      });

    fetch("http://localhost:5000/api/reservation")
      .then((response) => response.json())
      .then((result) => {
        setBookedReservations(result);
      });
  }, []);
  return (
    <ul className="flex justify-center my-10">
      {bookedReservations
        .filter((reservation) => reservation.user_id === user.id)
        .map((reservation) => (
          <li key={reservation.id} className=" ">
            <CardsHistory
              car={cars.filter((car) => car.id === reservation.vehicle_id)}
            />
            <Link to="/">
              <ViewButton />
            </Link>
          </li>
        ))}
      {/* <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <CardsHistory />
          <Link to="/">
            <ViewButton />
          </Link>
        </li>
        <li className="box row-start-2 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <CardsHistory />
          <Link to="/">
            <ViewButton />
          </Link>
        </li>
        <li className="box row-start-3 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <CardsHistory />
          <Link to="/">
            <ViewButton />
          </Link>
        </li>
        <li className="box row-start-4 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
          <CardsHistory />
          <Link to="/">
            <ViewButton />
          </Link>
        </li> */}
    </ul>
  );
}

export default MyHistory;
