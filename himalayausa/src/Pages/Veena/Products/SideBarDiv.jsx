import React from "react";

const SideBarDiv = (props) => {
    // console.log(props)
  return (
    <div>
      <select className="sidebarfilter" onChange={(e) => props.handlefilter(e.target.value)}>
        <option value="">Health Category</option>
        <option value="Herbal Supplements">Herbal Supplements</option>
        <option value="Oral Care">Oral Care</option>
        <option value="Personal Care">Personal Care</option>
      </select>
    </div>
  );
};

export default SideBarDiv;
