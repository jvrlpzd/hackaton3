import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import MyHistory from "./pages/MyHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/history" element={<MyHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
