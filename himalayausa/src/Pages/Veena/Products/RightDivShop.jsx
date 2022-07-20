import React from "react";

import { Link } from "react-router-dom";

const RightDivShop = (props) => {
  console.log(props)

  const products = props.data
  
  return (
    <div className="mapping-data">
      {products?.map((e) => {
        return (
          <Link key={e.id} className="data-item" to={`${e?.id}`}>
            <img src={e?.Img} className="image" alt="missing" />
            <h6>{e?.Name}</h6>
            <h6>$ {e?.Price}</h6>
          </Link>
        );
      })}
    </div>
  );
};

export default RightDivShop;
