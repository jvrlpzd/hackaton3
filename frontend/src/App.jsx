import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import SignUp from "./pages/SignUp";
import MyHistory from "./pages/MyHistory";
import Nav from "./components/navbar/Nav";
import MyProfile from "./pages/MyProfile";
import OurServices from "./pages/OurServices";
import Connexion from "./pages/Connexion";
import { CurrentUserContextProvider } from "./context/userContext";
import { CarContextProvider } from "./context/carContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <CarContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/history" element={<MyHistory />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/profil" element={<MyProfile />} />
            <Route path="/services" element={<OurServices />} />
          </Routes>
        </BrowserRouter>
      </CarContextProvider>
    </CurrentUserContextProvider>
  );
}

export default App;
