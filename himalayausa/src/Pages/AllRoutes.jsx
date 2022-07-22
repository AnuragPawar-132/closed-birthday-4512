import React from "react";
import Navbar from "../Components/Shilajit/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";
import Registration from "../Components/Shilajit/Reg/Registration";
import Login from "../Components/Shilajit/Log/Login";
import Shop from "./Veena/Products/Shop/Shop";
import OralCare from "./Veena/Products/OralCare/OralCare";
import OralCareDetails from "./Veena/Products/OralCare/OralCareDetails";
import ShopDetails from "./Veena/Products/Shop/ShopDetails";
import Herbal from "./Veena/Products/Herbal/Herbal";
import HerbalDetail from "./Veena/Products/Herbal/HerbalDetail"

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:id" element={<ShopDetails />} />
        <Route path="/OralCare" element={<OralCare />} />
        <Route path="/OralCare/:id" element={<OralCareDetails />} />
        <Route path="/HerbalSupplement" element={<Herbal />} />
        <Route path="/HerbalSupplement/:id" element={<HerbalDetail />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
