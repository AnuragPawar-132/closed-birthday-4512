import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";
import Login from "../Components/Shilajit/Log/Login"
import Registration from "../Components/Shilajit/Reg/Registration";
import Checkout from "./Anurag/Checkout"
import About from "./Anurag/About"
import Cart from "./Anurag/Cart";
import PaymentSuccess from "./Anurag/PaymentSuccess";
import Toothpaste from "../Components/Govind/Toothpaste";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
        <Route path="/toothpaste" element={<Toothpaste/>} />
      </Routes>
    </div>
  );
};






export default AllRoutes;
