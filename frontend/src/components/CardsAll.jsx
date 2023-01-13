import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useCarContext } from "../context/carContext";

function CardsAll() {
  const {
    cars,
    city,
    filterCars,
    bookedReservations,
    dateAller,
    dateRetour,
    type,
    fuel,
  } = useCarContext();
  const [carsOut, setCarsOut] = useState([]);

  function isBetween(number, start, end) {
    return number >= start && number <= end;
  }

  // useEffect(() => {
  //   setCarsOut(
  //     cars.filter((car) => {
  //       return !bookedReservations.some(
  //         (reservation) =>
  //           reservation.vehicle_id === car.id &&
  //           (isBetween(
  //             parseInt(dateAller.split("-").join(""), 10),
  //             parseInt(reservation.taken_date.split("/").join(""), 10),
  //             parseInt(reservation.return_date.split("/").join(""), 10)
  //           ) ||
  //             isBetween(
  //               parseInt(dateRetour.split("-").join(""), 10),
  //               parseInt(reservation.taken_date.split("/").join(""), 10),
  //               parseInt(reservation.return_date.split("/").join(""), 10)
  //             ))
  //       );
  //     })
  //   );
  // }, [dateAller, dateRetour]);

  useEffect(() => {
    setCarsOut(
      cars.filter((car) => {
        return !bookedReservations.some(
          (reservation) =>
            reservation.vehicle_id === car.id &&
            (isBetween(
              parseInt(reservation.taken_date.split("/").join(""), 10),
              parseInt(dateAller.split("-").join(""), 10),
              parseInt(dateRetour.split("-").join(""), 10)
            ) ||
              isBetween(
                parseInt(reservation.return_date.split("/").join(""), 10),
                parseInt(dateAller.split("-").join(""), 10),
                parseInt(dateRetour.split("-").join(""), 10)
              ))
        );
      })
    );
  }, [dateAller, dateRetour]);

  return (
    <div className="w-full grid md:grid-cols-4 gap-8">
      {carsOut
        .filter((car) => !car.completed)
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
