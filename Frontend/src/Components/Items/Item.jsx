import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="w-full sm:w-[240px] md:w-[260px] lg:w-[280px] overflow-hidden rounded-xl border shadow-sm">
        <Link to={`/product/${props.id}`}>
          {" "}
          <div className="overflow-hidden rounded-lg">
            <img src={props.img} alt="" onClick={window.scrollTo(0, 0)} className="mx-auto w-[180px] p-5 transition-transform duration-300 hover:scale-110"
            />{" "}
          </div>
        </Link>
        <div className="mt-3 px-3 sm:px-2">
          <p className="
      text-sm
      sm:text-[15px]
      md:text-[16px]
      font-medium
      text-gray-700
      line-clamp-2
    ">
            {props.name}
          </p>

          {/* Price */}
          <div className="mt-2 flex items-center sm:gap-3 gap-2">
            <span className="text-base sm:text-lg font-bold text-gray-900">
              ${props.new_price}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ${props.old_price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
