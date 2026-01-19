import { useContext } from "react";
import { Link } from "react-router-dom";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { all_product, cart, removeFromCart, gettotalamount } =
    useContext(ShopContext);

  return (
    <div
      className="
    my-[100px] mx-[170px]
    max-[1280px]:my-[60px] max-[1280px]:mx-[50px]
  "
    >
      {/* Header Row */}
      <div
        className="
      grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
      items-center gap-[75px]
      py-[20px]
      text-[#454545] text-[18px] font-bold
      max-[1280px]:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]
      max-[1280px]:gap-[20px]
      max-[1280px]:py-[15px]
      max-[1280px]:text-[15px]
      max-[500px]:hidden
    "
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {/* Cart Items */}
      {all_product.map((e, index) => {
        if (cart[e.id] > 0) {
          return (
            <div key={index}>
              <div
                className="
              grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
              items-center gap-[75px]
              py-[20px]
              text-[#454545] text-[20px] font-semibold
              max-[1280px]:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]
              max-[1280px]:gap-[20px]
              max-[1280px]:py-[15px]
              max-[1280px]:text-[15px]
            "
              >
                <img
                  src={e.image}
                  alt=""
                  className="
                h-[65px]
                max-[1280px]:h-[50px]
              "
                />

                <p>{e.name}</p>

                <p>${e.new_price}</p>

                <button
                  className="
                w-[64px] h-[50px]
                border border-[#a29d9d]
                bg-white
                max-[1280px]:w-[40px] max-[1280px]:h-[40px]
              "
                >
                  {cart[e.id]}
                </button>

                <p>${e.new_price * cart[e.id]}</p>

                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                  className="
                w-[15px] mx-[40px] cursor-pointer
                max-[1280px]:mx-auto
              "
                />
              </div>

              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div
        className="
      flex my-[100px]
      max-[1280px]:my-[80px]
      max-[1280px]:flex-col
      max-[1280px]:gap-[50px]
    "
      >
        {/* Total Section */}
        <div
          className="
        flex-1 flex flex-col gap-[40px]
        mr-[200px]
        max-[1280px]:mr-0
      "
        >
          <h1>Cart Total</h1>

          <div>
            <div
              className="
            flex justify-between
            text-[20px]
            py-[15px]
          "
            >
              <p>Sub Total</p>
              <p>${gettotalamount()}</p>
            </div>

            <hr className="h-[3px] bg-[#e2e2e2] border-0" />

            <div
              className="
            flex justify-between
            text-[20px]
            py-[15px]
          "
            >
              <p>Shipping fee</p>
              <p>Free</p>
            </div>

            <hr className="h-[3px] bg-[#e2e2e2] border-0" />

            <div
              className="
            flex justify-between
            text-[20px]
            py-[15px]
          "
            >
              <h3>Total</h3>
              <h3>${gettotalamount()}</h3>
            </div>
          </div>

          <Link to="/checkout">
            <button
              className="
            w-[262px] h-[58px]
            bg-[#ff5a5a] text-white
            text-[16px] font-semibold
            border-0 cursor-pointer
            max-[1280px]:max-w-[200px]
            max-[1280px]:h-[45px]
            max-[1280px]:text-[15px]
          "
            >
              Proceed To Checkout
            </button>
          </Link>
        </div>

        {/* Promo Code Section */}
        <div
          className="
        flex-1
        text-[20px] font-semibold
        max-[1280px]:max-w-[500px]
      "
        >
          <p className="text-[#555]">Apply Promocode</p>

          <div
            className="
          flex items-center
          w-[504px] h-[58px]
          mt-[15px]
          pl-[20px]
          bg-[#eaeaea]
          max-[1280px]:w-full
        "
          >
            <input
              type="text"
              placeholder="Enter Promocode"
              className="
            w-[330px] h-[50px]
            bg-transparent
            border-0 outline-none
            text-[16px]
          "
            />

            <button
              className="
            w-[170px] h-[58px]
            bg-black text-white
            text-[16px]
            cursor-pointer
            max-[1280px]:w-[162px]
          "
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
