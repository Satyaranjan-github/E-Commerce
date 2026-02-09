import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="group relative w-[300px] bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-2.5 transition-all hover:bg-white/[0.06]">
      <Link to={`/product/${props.id}`} className="block">
        <div className="relative aspect-square rounded-xl bg-zinc-900/50 overflow-hidden flex items-center justify-center">
          <img
            src={props.img}
            alt={props.name}
            onClick={() => window.scrollTo(0, 0)}
            className="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-1.5 right-1.5 bg-white text-black px-2 py-0.5 rounded-full font-black text-[9px]">
            ${props.new_price}
          </div>
        </div>
      </Link>

      <div className="mt-2 px-0.5">
        <h3 className="text-white text-[11px] font-medium tracking-tight line-clamp-1 truncate">{props.name}</h3>
        <p className="text-[9px] text-zinc-600 line-through font-mono tracking-tighter">${props.old_price}</p>
      </div>
    </div>
  );
};

export default Item;
