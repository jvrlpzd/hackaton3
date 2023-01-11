import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
