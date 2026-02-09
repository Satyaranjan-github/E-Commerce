import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { all_product, cart, removeFromCart, gettotalamount } =
    useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-[#e0e0e0] min-h-screen pt-32 pb-20 px-4 lg:px-20 relative overflow-hidden">

      {/* 1. Background Textures & Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[size:100%_4px] bg-[linear-gradient(to_bottom,white_1px,transparent_1px)]" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Page Identity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-red-500 font-black mb-2">System_Cart_v2.0</h2>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tightest">
              The <br /> <span className="text-transparent stroke-text-white">Manifest</span>
            </h1>
          </div>
        </div>

        {/* 2. The Itemized Table */}
        <div className="w-full">
          <div className="hidden md:grid grid-cols-[1.5fr_4fr_1.5fr_1.5fr_1.5fr_1fr] gap-4 py-4 px-8 bg-zinc-900/50 border-y border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
            <p>Preview</p>
            <p>Artifact_ID</p>
            <p>Unit_Cost</p>
            <p>Quantity</p>
            <p>Line_Total</p>
            <p className="text-right">Action</p>
          </div>

          <div className="space-y-1 mt-1">
            {all_product.map((e, index) => {
              if (cart[e.id] > 0) {
                return (
                  <div key={index} className="group relative">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_4fr_1.5fr_1.5fr_1.5fr_1fr] items-center gap-4 py-8 px-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group/row">

                      {/* Image with Glitch Frame */}
                      <div className="relative w-24 h-32 bg-zinc-900 p-1 border border-white/10 group-hover/row:border-red-600/50 transition-colors">
                        <img src={e.image} alt="" className="w-full h-full object-cover opacity-50 group-hover/row:opacity-100 transition-opacity grayscale group-hover/row:grayscale-0" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 scale-0 group-hover/row:scale-100 transition-transform" />
                      </div>

                      {/* Identification */}
                      <div >
                        <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-1 cursor-pointer"
                          onClick={() => navigate(`/product/${e.id}`)}>{e.name}</h3>
                        <span className="text-[10px] font-mono text-red-500/50">#ID_0{e.id}</span>
                      </div>

                      {/* Price */}
                      <p className="font-mono text-sm text-gray-400 group-hover/row:text-white transition-colors">${e.new_price}</p>

                      {/* Quantity Input */}
                      <div className="relative w-16 group/qty">
                        <div className="absolute -inset-1 bg-red-600/20 blur opacity-0 group-hover/qty:opacity-100 transition-opacity" />
                        <div className="relative bg-black border border-white/10 py-3 text-center font-mono text-xs text-red-500">
                          {cart[e.id]}
                        </div>
                      </div>

                      {/* Line Total */}
                      <p className="font-black text-xl italic text-white tracking-tighter">
                        ${(e.new_price * cart[e.id]).toFixed(2)}
                      </p>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(e.id)}
                        className="flex md:justify-end group/del"
                      >
                        <div className="px-4 py-2 border border-red-600/20 text-red-600 text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                          Delete
                        </div>
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* 3. Summary & Financials */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-1 px-1 bg-white/5 border border-white/5">

          {/* Checkout Section */}
          <div className="lg:col-span-8 bg-[#050505] p-12">
            <h2 className="text-white text-xs font-black uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-600"></span>
              Summary_Output
            </h2>

            <div className="max-w-md space-y-6">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Base_Total</span>
                <div className="flex-1 border-b border-white/5 mx-4 border-dotted" />
                <span className="text-xl font-bold text-white">${gettotalamount()}</span>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Global_Logistics</span>
                <div className="flex-1 border-b border-white/5 mx-4 border-dotted" />
                <span className="text-xs font-black text-green-500 uppercase tracking-widest">Free_Tier</span>
              </div>

              <div className="pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="group">
                  <span className="text-[9px] text-red-600 font-black uppercase tracking-[0.3em] block mb-2">Final_Commitment</span>
                  <span className="text-7xl font-black italic text-white leading-none tracking-tightest drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    ${gettotalamount()}
                  </span>
                </div>

                <Link to="/checkout" className="flex-1 max-w-xs">
                  <button className="w-full py-6 bg-red-600 text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-300 relative group overflow-hidden">
                    <span className="relative z-10 italic">Execute_Order</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
    .stroke-text-white { -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4); }
    .tracking-tightest { letter-spacing: -0.07em; }
  `}</style>
    </div>
  );
};

export default CartItems;
