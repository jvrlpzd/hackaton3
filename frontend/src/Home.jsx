import React, { useEffect } from "react";
import FormReservation from "./components/FormReservation";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { useCarContext } from "./context/carContext";

function Home() {
  const { cars, setCars } = useCarContext();

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((result) => {
        setCars(result);
      }, []);
  });
  return (
    <div>
      <Banner />
      <FormReservation />
      <div className="w-full grid grid-cols-2 gap-8">
        {cars.map((car) => (
          <Card car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
