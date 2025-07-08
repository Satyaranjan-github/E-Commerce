import React from "react";
import Breakcrum from "../Components/Breakcrums/Breakcrum";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";
import Relatedproduct from "../Components/Relatedproduct/Relatedproduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((p) => p.id === Number(id));

  return (
    <div>
      <Breakcrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <Relatedproduct />
    </div>
  );
};

export default Product;
