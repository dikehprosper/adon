import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Lore from "./Lore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lore" element={<Lore />} />
    </Routes>
  );
}

export default App;