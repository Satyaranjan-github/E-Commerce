import React from "react";
import "./Breakcrum.css";


const Breakcrum = (props) => {
  const { product } = props;
  return (
    <div className="breakcrum">
      HOME--SHOP
      {product.category}--{product.name}
    </div>
  );
};

export default Breakcrum;
