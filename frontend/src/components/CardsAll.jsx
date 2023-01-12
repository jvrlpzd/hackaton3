import React, { useEffect } from "react";
import Card from "./Card";
import { useCarContext } from "../context/carContext";

function CardsAll() {
  const {
    cars,
    setCars,
    city,
    filterCars,
    // bookedReservations,
    setBookedReservations,
  } = useCarContext();

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((result) => {
        setCars(result);
      });

    fetch("http://localhost:5000/api/reservation")
      .then((response) => response.json())
      .then((results) => {
        setBookedReservations(results.filter((result) => !result.completed));
      });
  }, []);
  return (
    <div className="w-full grid md:grid-cols-4 gap-8">
      {cars
        .filter((car) => city === "" || city === car.city)
        .filter((car) => filterCars === "" || filterCars === car.brand)
        .map((car) => (
          <Card car={car} />
        ))}
      <button
        type="button"
        // onClick={() =>
        //   console.log(
        //     parseInt(bookedReservations[0].taken_date.split("/").join(""), 10)
        //   )
        // }
      >
        YOLOOOOO
      </button>
    </div>
  );
}

export default CardsAll;
