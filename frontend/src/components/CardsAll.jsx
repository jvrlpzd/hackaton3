import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useCarContext } from "../context/carContext";

function CardsAll() {
  const {
    cars,
    setCars,
    city,
    filterCars,
    bookedReservations,
    setBookedReservations,
    dateAller,
    dateRetour,
    type,
    fuel,
  } = useCarContext();
  const [carsOut, setCarsOut] = useState([]);

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

  function isBetween(number, start, end) {
    return number >= start && number <= end;
  }

  useEffect(() => {
    setCarsOut(
      cars.filter((car) => {
        return !bookedReservations.some(
          (reservation) =>
            reservation.vehicle_id === car.id &&
            (isBetween(
              parseInt(dateAller.split("-").join(""), 10),
              parseInt(reservation.taken_date.split("/").join(""), 10),
              parseInt(reservation.return_date.split("/").join(""), 10)
            ) ||
              isBetween(
                parseInt(dateRetour.split("-").join(""), 10),
                parseInt(reservation.taken_date.split("/").join(""), 10),
                parseInt(reservation.return_date.split("/").join(""), 10)
              ))
        );
      })
    );
  }, [dateAller, dateRetour]);

  return (
    <div className="w-full grid md:grid-cols-4 gap-8 px-10 py-3">
      {carsOut
        .filter((car) => city === "" || city === car.city)
        .filter((car) => filterCars === "" || filterCars === car.brand)
        .filter((car) => type === "" || type === car.car_type)
        .filter((car) => fuel === "" || fuel === car.fuel)
        .map((car) => (
          <Card key={car.id} car={car} />
        ))}
    </div>
  );
}

export default CardsAll;
