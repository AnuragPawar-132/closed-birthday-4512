import React,{useEffect} from "react";
import HerbalRightDiv from "./HerbalRightDiv";
import "../Shop.css";
import SideBarOral from "./SideBarOral";
import { useState } from "react";
import axios from "axios";

const Herbal = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://my-himalayausa-project.herokuapp.com/Products?=Herbal%20Care")
    .then((r) => {
      console.log(r.data);
      setData(r.data)
    })
  }, [setData]);

  const handleSort = (e) => {
    // console.log(data)
    let data2 = data.sort((a, b) => {
      if (e === "priceasc") {
        return a.Price - b.Price;
      } else if (e === "pricedesc") {
        return b.Price - a.Price;
      } else if (e === "nameasc") {
        return a.Name.localeCompare(b.Name);
      } else if (e === "namedesc") {
        return b.Name.localeCompare(a.Name);
      }
    });
    // console.log(data);
    setData([...data2]);
  };
  return (
    <div>
      <div className="heading">
        <h1>Oral Care</h1>
      </div>
      <div className="product-menu-dropdown-div">
        <select className="filter" onChange={(e) => handleSort(e.target.value)}>
          <option value="Featured">Featured</option>
          <option value="BestSelling">Best Selling</option>
          <option value="nameasc">Name Ascending</option>
          <option value="namedesc">Name Descending</option>
          <option value="priceasc">Price Ascending</option>
          <option value="pricedesc">Price Descending</option>
        </select>

        <select className="filter">
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="maindiv">
        <div className="sidebar_div">
          <HerbalSideBar />
        </div>
        <div className="right_div">
          <HerbalRightDiv data={data} />
        </div>
      </div>
    </div>
  );
};

export default Herbal;
