import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import SignUp from "./pages/SignUp";
import MyHistory from "./pages/MyHistory";
import Nav from "./components/navbar/Nav";
import { CarContextProvider } from "./context/carContext";

function App() {
  return (
    <CarContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/history" element={<MyHistory />} />
        </Routes>
      </BrowserRouter>
    </CarContextProvider>
  );
}

export default App;
