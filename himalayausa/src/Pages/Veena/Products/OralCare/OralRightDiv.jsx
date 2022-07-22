import React from "react";
import "../Shop.css";
import { Link } from "react-router-dom";
import axios from "axios";

const OralRightDiv = (props) => {
  // console.log(props)

  const products = props.data;

  const addtocart = (elem) => {
    axios
      .post(`https://my-himalayausa-project.herokuapp.com/cart`,{
        Name: elem.Name,
        Img:elem.Img,
        Price:elem.Price,
        count:1
      })
      .then((r) => {
        console.log(r);
        alert("product added to cart successfully");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <div className="mapping-data">
      {products?.map((e) => {
        return (
          <div className="data-item" key={e.id}>
            <Link key={e.id} className="data-item" to={`${e?.id}`}>
              <img src={e?.Img} className="image" alt="missing" />
            </Link>
            <div className="maindivs">
              <div className="firstdiv">
                <h6 className="name">{e?.Name}</h6>
              </div>
              <div className="seconddiv">
                <h6 className="price">$ {e?.Price}</h6>
                <button className="btn" onClick={() => addtocart(e)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OralRightDiv;
