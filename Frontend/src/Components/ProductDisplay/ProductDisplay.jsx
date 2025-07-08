import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import stardull from "../../Assets/star_dull_icon.png";
import {ShopContext} from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="productdisplay-imgs">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplayimg">
          <img src={product.image} className="productdisplayimg-img" alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull} alt="" />
          <p>(20)</p>
        </div>
        <div className="product_price">
          <div className="product_oldprice">${product.old_price}</div>
          <div className="product_newprice">${product.new_price}</div>
        </div>
        <div className="product_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tenetur, repellat quaerat amet natus quam aperiam porro laborum neque
          delectus quia quod magnam non mollitia, expedita itaque, quisquam
          dolorem sit.
        </div>
        <div className="product_size">
            <h1>Select size:</h1>
            <div className="product_sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        {localStorage.getItem('auth-token')?
       <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
      </div>
    </div>
  );
};

export default ProductDisplay;
