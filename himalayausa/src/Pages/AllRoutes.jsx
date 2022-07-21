import React from "react";

import Navbar from "../Components/Shilajit/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";
import Shop from "./Veena/Products/Shop";





const AllRoutes=()=>{

    return(
        <div>

           <Navbar/> 

            <Routes>
                
                <Route path="/" element={<Homepage/> } />
                <Route path="/Shop" element={<Shop />}/>
            </Routes>

        </div>
    )
}
export default AllRoutes;
