import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breakcrum from "../Components/Breakcrums/Breakcrum";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Relatedproduct from "../Components/Relatedproduct/Relatedproduct";
import { ShopContext } from "../Context/ShopContext";

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
