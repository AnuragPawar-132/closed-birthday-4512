import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const PersonalCareDetails = (props) => {
  const params = useParams();
  const [data, setData] = useState({});
  const [count , setCount] = useState(0);

  const incCount = () => {
    setCount(count+1);
}

const decCount = () => {
  if(count > 0){
    setCount(count-1);
  }
  else{
    setCount(0)
  }
}

  useEffect(() => {
    axios({
      url: `https://my-himalayausa-project.herokuapp.com/Products?Category=Personal%20Care&id=${params.id}`,
      method: "GET",
    }).then((r) => {
      console.log(r);
      setData(r.data[0]);
    });
  }, [params.id]);

  console.log(data);

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
    <div className="maindiv">
      <div className="product-details-img">
        <img className="images" src={data.Img} alt="Products" />
      </div>
      <div className="product-category1">
          <div className="divs1">
        <p>{data.Name}</p>
        <p>$ {data.Price}</p>
        </div>
        <div className="mainbtn-div">
          <div className="counterdiv">
          <button className="countbtn" onClick={decCount}>-</button>
          <div className="countbtn">{count}</div>
          <button className="countbtn" onClick={incCount}>+</button>
          </div>
          <button className="btns" onClick={() => addtocart(data)}>
            ADD TO CART
          </button>
        </div>
        <br />
          <button className="btn1">Buy With G Pay</button>
        <br />
        <h1>{data.Product_desc}</h1>
        <br />
        <h5>
          Suggested Use
          <br />
          <br />
          {data.Suggested_Use}
        </h5>
      </div>
    </div>
  );
};

export default PersonalCareDetails;
