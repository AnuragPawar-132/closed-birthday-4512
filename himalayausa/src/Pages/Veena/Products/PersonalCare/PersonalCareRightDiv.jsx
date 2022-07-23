import React from "react";
import "../Shop.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const PersonalCareRightDiv = (props) => {
  // console.log(props)
  const warning = () => toast.warning("Item already present in Bag");
  const success = () => toast.success("Item Added to Bag");

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
        success()
      })
      .catch((err) => {
        warning()
      });
  };

  return (
    <>
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
                <button className="btn123" onClick={() => addtocart(e)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <ToastContainer />
    </>
  );
};

export default PersonalCareRightDiv;