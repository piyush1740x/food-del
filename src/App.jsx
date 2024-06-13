import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cart from "./components/Card";
import PlaceOrder from "./components/pages/PlaceOrder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="PlaceOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
