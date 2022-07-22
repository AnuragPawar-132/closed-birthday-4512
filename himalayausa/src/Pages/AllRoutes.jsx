import React from "react";

import Navbar from "../Components/Shilajit/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";
import Shop from "./Veena/Products/Shop";
import Registration from "../Components/Shilajit/Reg/Registration";
import Login from "../Components/Shilajit/Log/Login";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </div>
  );
};
export default AllRoutes;
