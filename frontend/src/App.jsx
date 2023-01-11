import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import "./App.css";
import Home from "./Home";
import MyHistory from "./pages/MyHistory";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/history" element={<MyHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
