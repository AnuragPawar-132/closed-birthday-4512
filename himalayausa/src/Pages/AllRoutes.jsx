import React from "react";

import Navbar from "../Components/Shilajit/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";




const AllRoutes=()=>{

    return(
        <div>

           <Navbar/> 

            <Routes>
                
                <Route path="/" element={<Homepage/> } />
                
            </Routes>

        </div>
    )
}
export default AllRoutes;
