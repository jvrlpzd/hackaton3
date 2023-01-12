/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CarContext = createContext();

export default CarContext;

export function CarContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [reservation, setReservation] = useState([]);
  const [bookedReservations, setBookedReservations] = useState([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CarContext.Provider
      value={{
        cars,
        setCars,
        city,
        setCity,
        brand,
        setBrand,
        reservation,
        setReservation,
        bookedReservations,
        setBookedReservations,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

CarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCarContext = () => useContext(CarContext);
