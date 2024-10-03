import { Routes, Route } from "react-router-dom";
import FoodCard from "./components/FoodCard";
import ARView from "./components/ARView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodCard category="main-course" />} />
      <Route path="/ar-view" element={<ARView />} />
    </Routes>
  );
}

export default App;
