import { useContext } from "react";
import { Link } from "react-router-dom";
import stardull from "../../Assets/star_dull_icon.png";
import star_icon from "../../Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex mx-[170px]
                max-[1280px]:mx-[50px]
                max-[1024px]:mx-[30px]
                max-[800px]:mx-[10px]
                max-[500px]:flex-col">

      {/* LEFT SECTION */}
      <div className="flex gap-[17px]
                  max-[1280px]:gap-[10px]
                  max-[1024px]:gap-[5px]
                  max-[800px]:flex-col-reverse max-[800px]:items-center max-[800px]:gap-0
                  max-[500px]:flex-row max-[500px]:gap-[5px] max-[500px]:mx-auto">

        {/* Thumbnails */}
        <div className="flex flex-col gap-[16px]
                    max-[1280px]:gap-[10px]
                    max-[800px]:flex-row max-[800px]:gap-[10px]
                    max-[500px]:flex-col max-[500px]:gap-[8px]">
          {[1, 2, 3, 4].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              className="h-[163px]
                     max-[1280px]:h-[120px]
                     max-[1024px]:h-[80px]
                     max-[800px]:h-[70px]
                     max-[500px]:h-[75px]"
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img
            src={product.image}
            alt=""
            className="w-[586px] h-[700px]
                   max-[1280px]:w-auto max-[1280px]:h-[510px]
                   max-[1024px]:h-[350px]
                   max-[800px]:h-[300px]
                   max-[500px]:h-[330px]"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col mx-[70px]
                  max-[1280px]:mx-[30px]
                  max-[500px]:mx-[5px]">

        {/* Title */}
        <h1 className="text-[#3d3d3d] text-[40px] font-bold
                   max-[1280px]:text-[25px]
                   max-[1024px]:text-[18px]
                   max-[500px]:mt-[15px] max-[500px]:text-[20px] max-[500px]:font-semibold">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-[5px] my-[13px] text-[#1c1c1c] text-[16px]
                    max-[1280px]:gap-[3px] max-[1280px]:text-[14px]">
          <img src={star_icon} className="max-[1024px]:w-[15px]" />
          <img src={star_icon} className="max-[1024px]:w-[15px]" />
          <img src={star_icon} className="max-[1024px]:w-[15px]" />
          <img src={star_icon} className="max-[1024px]:w-[15px]" />
          <img src={stardull} className="max-[1024px]:w-[15px]" />
          <p>(20)</p>
        </div>

        {/* Price */}
        <div className="flex gap-[30px] my-[40px] text-[30px] font-bold
                    max-[1280px]:my-[10px] max-[1280px]:text-[20px]">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>

        {/* Description */}
        <p className="text-[24px] font-medium
                  max-[1280px]:text-[18px]
                  max-[1024px]:text-[14px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tenetur, repellat quaerat amet natus quam aperiam porro laborum neque
          delectus quia quod magnam non mollitia.
        </p>

        {/* Sizes */}
        <div className="mt-[55px]
                    max-[1280px]:mt-[20px]
                    max-[1024px]:my-[10px]">
          <h1 className="text-[#656565] text-[20px] font-semibold">
            Select size:
          </h1>

          <div className="flex gap-[20px] my-[30px]
                      max-[500px]:gap-[10px] max-[500px]:mx-[20px] max-[500px]:my-[10px]">
            {["S", "M", "L", "XL", "XXL"].map(size => (
              <div
                key={size}
                className="px-[24px] py-[18px] bg-[#d2caca] border border-[#ebebeb] rounded-[3px] cursor-pointer
                       max-[1280px]:px-[20px] max-[1280px]:py-[14px]
                       max-[1024px]:px-[16px] max-[1024px]:py-[10px] max-[1024px]:text-[12px]
                       max-[800px]:px-[2px] max-[800px]:py-[4px]
                       max-[500px]:px-[16px] max-[500px]:py-[10px] max-[500px]:text-[14px]">
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => addToCart(product.id)}
            className="w-[586px] py-[20px] px-[40px] bg-[#ff4141] rounded-[5px]
                   text-white text-[24px] font-medium my-[25px] cursor-pointer
                   max-[1280px]:w-[450px] max-[1280px]:text-[18px]
                   max-[1024px]:w-[120px] max-[1024px]:py-[10px] max-[1024px]:my-[10px] max-[1024px]:text-[14px]
                   max-[800px]:w-[100px]
                   max-[500px]:w-[130px] max-[500px]:text-[15px]">
            Add to cart
          </button>
        ) : (
          <Link to="/login" className="no-underline">
            <button className="w-[130px] bg-[#ff4141] text-white py-[10px] rounded-[5px]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
