import React, { useEffect } from "react";
import Card from "./Card";
import { useCarContext } from "../context/carContext";

function CardsAll() {
  const { cars, setCars, city, filterCars } = useCarContext();

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((result) => {
        setCars(result);
      }, []);
  });

  return (
    <div className="w-full grid md:grid-cols-4 gap-8">
      {cars
        .filter((car) => city === "" || city === car.city)
        .filter((car) => filterCars === "" || filterCars === car.brand)
        .map((car) => (
          <Card car={car} />
        ))}
    </div>
  );
}

export default CardsAll;
