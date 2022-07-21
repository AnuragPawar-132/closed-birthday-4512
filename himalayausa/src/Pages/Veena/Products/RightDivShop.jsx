import React from "react";
import "./Shop.css"
import { Link } from "react-router-dom";

const RightDivShop = (props) => {
  // console.log(props)

  const products = props.data
  
  return (
    <div className="mapping-data">
      {products?.map((e) => {
        return (
          <Link key={e.id} className="data-item" to={`${e?.id}`}>
            <img src={e?.Img} className="image" alt="missing" />
            <div className="maindivs">
            <div className="firstdiv">
            <h6 className="name">{e?.Name}</h6>
            </div>
            <div className="seconddiv">
            <h6 className="price">$ {e?.Price}</h6>
            <button className="btn">ADD TO CART</button>
            </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RightDivShop;
