/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CarContext = createContext();

export default CarContext;

export function CarContextProvider({ children }) {
  const [Car, setCar] = useState([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CarContext.Provider value={{ Car, setCar }}>
      {children}
    </CarContext.Provider>
  );
}

CarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCarContext = () => useContext(CarContext);
