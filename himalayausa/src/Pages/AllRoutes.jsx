import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Narayan/Homepage";



const AllRoutes=()=>{

    return(
        <div>
            <Routes>
                
                <Route path="/" element={<Homepage/> } />
                
            </Routes>
        </div>
    )
}
export default AllRoutes;
