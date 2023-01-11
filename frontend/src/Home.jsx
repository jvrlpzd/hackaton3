import React from "react";
import FormReservation from "./components/FormReservation";
import Nav from "./components/navbar/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <FormReservation />
    </div>
  );
}

export default Home;
