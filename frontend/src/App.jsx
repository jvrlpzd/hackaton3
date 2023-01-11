import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import SignUp from "./pages/SignUp";
import MyHistory from "./pages/MyHistory";
import Nav from "./components/navbar/Nav";
import AuthentificationPage from "./components/AuthentificationPage";
import MyProfile from "./pages/MyProfile";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/history" element={<MyHistory />} />
        <Route path="/login" element={<AuthentificationPage />} />
        <Route path="/profil" element={<MyProfile />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
