import React from "react";
import { Link } from "react-router-dom";
import  "../Shop.css"
const SideBarDiv = (props) => {
    // console.log(props)
  return (
    <div >
      <ul className="sidebarfilter">
      <li value="Shop"><Link to="/Shop">Health Category</Link></li>
      <li value="HerbalSupplements"><Link to="/HerbalSupplements">Herbal Supplements</Link></li>
      <li value="OralCare"><Link to="/OralCare">Oral Care</Link></li>
      <li value="PersonalCare"><Link to="/PersonalCare">Personal Care</Link></li>
      </ul>
    </div>
  );
};

export default SideBarDiv;
