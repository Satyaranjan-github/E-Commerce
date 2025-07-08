import { useContext } from "react";
import { Link } from "react-router-dom";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
const CartItems = () => {
  const { all_product, cart, removeFromCart, gettotalamount } =
    useContext(ShopContext);
  return (
    <div className="CartItems">
      <div className="cartitems-format">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cart[e.id] > 0) {
          return (

            <div key={index}>
              <div className="cartitem-format cartitems-format">
                <img src={e.image} className='carticon-product-icon' alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cart[e.id]}</button>
                <p>${e.new_price * cart[e.id]}</p>
                <img className="carticon-remove" src={remove_icon} onClick={() => { removeFromCart(e.id) }}
                  alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null;

      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-price">
              <p>Sub Total</p>
              <p>${gettotalamount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-price">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-price">
              <h3>Total</h3>
              <h3>${gettotalamount()}</h3>
            </div>
          </div>
          <Link to="/checkout"> <button >Proceed To Checkout</button></Link>
        </div>
        <div className="cartitems-promocode">
          <p>Apply Promocode</p>
          <div className="cartitems-promocode-input">
            <input type="text" placeholder="Enter Promocode" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
