// React
import { Routes, Route } from "react-router-dom";

// Main Pages
import ProductsList from "./components/ProductsList";
import ProductsAbout from "./components/ProductsAbout";
import ProductsDetails from "./components/ProductsDetails";

// Components
import NavBar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<ProductsAbout />} />
        <Route path="product/:productID/:price" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
