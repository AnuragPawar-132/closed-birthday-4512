import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";
import Registration from "../Pages/Shilajit/Reg/Registration";
import Login from "../Pages/Shilajit/Log/Login";
import Shop from "./Veena/Products/Shop/Shop";
import OralCare from "./Veena/Products/OralCare/OralCare";
import OralCareDetails from "./Veena/Products/OralCare/OralCareDetails";
import ShopDetails from "./Veena/Products/Shop/ShopDetails";
import Herbal from "./Veena/Products/Herbal/Herbal";
import HerbalDetail from "./Veena/Products/Herbal/HerbalDetail"
import PersonalCare from "./Veena/Products/PersonalCare/PersonalCare";
import PersonalCareDetail from "./Veena/Products/PersonalCare/PersonalCareDetail";
import Checkout from "./Anurag/Checkout";
import Cart from "../Pages/Anurag/Cart";
import About from "../Pages/Anurag/About";
import PaymentSuccess from "../Pages/Anurag/PaymentSuccess";
import Navbar from "../Components/Shilajit/Navbar/Navbar";
import Footer from "../Components/Govind/Footer"


const AllRoutes = () => {
  return (
    <>
    <div>
     <Navbar/>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:id" element={<ShopDetails />} />
        <Route path="/OralCare" element={<OralCare />} />
        <Route path="/OralCare/:id" element={<OralCareDetails />} />
        <Route path="/HerbalSupplements" element={<Herbal />} />
        <Route path="/HerbalSupplements/:id" element={<HerbalDetail />} />
        <Route path="/PersonalCare" element={<PersonalCare />} />
        <Route path="/PersonalCare/:id" element={<PersonalCareDetail />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
      </Routes>
      <Footer/>
      
    </div>
    {/* <Routes>
      <Route path="/checkout" element={<Checkout/>} />
      </Routes> */}
    </>
  );
};
export default AllRoutes;
