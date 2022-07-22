import React from "react";

import Navbar from "../Components/Shilajit/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";

import Shop from "./Veena/Products/Shop";
import Registration from "../Components/Shilajit/Reg/Registration";
import Login from "../Components/Shilajit/Log/Login";

import Shop from "./Veena/Products/Shop/Shop";
import OralCare from "./Veena/Products/OralCare/OralCare";
import OralCareDetails from "./Veena/Products/OralCare/OralCareDetails";
import ShopDetails from "./Veena/Products/Shop/ShopDetails";


const AllRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop />} />

        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />


        <Route path="/Shop/:id" element={<ShopDetails />} />
        <Route path="/OralCare" element={<OralCare />} />
        <Route path="/OralCare/:id" element={<OralCareDetails />}/>

      </Routes>

    </div>
  );
};
export default AllRoutes;