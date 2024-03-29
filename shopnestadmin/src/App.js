import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddProductPage from "./Pages/AddProductPage";
import OrderPage from "./Pages/OrderPage";
import Navbar from "./Components/Navbar";
import EditPage from "./Pages/EditPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/edit/:productId" element={<EditPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
