import React from "react";
import FormReservation from "./components/FormReservation";
import Nav from "./components/navbar/Nav";
import Banner from "./components/Banner";

function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <FormReservation />
    </div>
  );
}

export default Home;
