import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./Veena/Products/Shop";


const AllRoutes=()=>{

    return(
        <div>
            <Routes>
                <Route path="/shop" element={<Shop />}/>
            </Routes>
        </div>
    )
}
export default AllRoutes;