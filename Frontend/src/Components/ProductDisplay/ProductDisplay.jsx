import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="bg-[#050505] text-[#e0e0e0] min-h-screen font-sans selection:bg-red-500/30">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Section Header: Minimal Breadcrumb */}
        <div className="flex items-center gap-3 mb-12 opacity-40 group cursor-default">
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase group-hover:text-red-500 transition-colors">Catalog</span>
          <div className="w-1 h-1 bg-zinc-700 rotate-45" />
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase group-hover:text-red-500 transition-colors">Tactical_Archive</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT: Metadata Column (Hidden on mobile, 1 col on LG) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-8 border-r border-white/5 py-4">
            <div className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-mono tracking-[0.8em] text-zinc-600 uppercase">
              Spec_Sheet_v7.01
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[1px] h-20 bg-gradient-to-b from-red-600 to-transparent" />
              <span className="text-[10px] font-mono text-red-500 font-bold">01</span>
            </div>
          </div>

          {/* CENTER: The Visual Artifact */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/10 p-2 group bg-zinc-900/20">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-600" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-600" />

              <div className="overflow-hidden bg-black aspect-[3/4]">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* Subtle Scanning Text */}
              <div className="absolute top-6 right-6 mix-blend-difference pointer-events-none">
                <p className="text-[7px] font-mono text-white/50 leading-none tracking-tighter">SCAN_COORD: 40.7128° N</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Functional Controls */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <header className="mb-8">
              <h1 className="text-5xl font-light tracking-tighter uppercase mb-2">
                {product?.name?.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "font-black block text-6xl" : "opacity-60"}>{word} </span>
                ))}
              </h1>
              <div className="flex items-center gap-6 mt-6">
                <p className="text-4xl font-mono tracking-tighter">${product?.new_price}</p>
                <div className="px-2 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono">
                  -{Math.round(100 - (product?.new_price / product?.old_price * 100))}% OFF
                </div>
              </div>
            </header>
            {/* Size Selection: Minimal Underline Style */}
            <div className="mb-12">
              <h3 className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em] mb-6">Select_Module_Size</h3>
              <div className="flex gap-8">
                {["S", "M", "L", "XL"].map(size => (
                  <button key={size} className="relative group pb-2">
                    <span className="text-sm font-bold group-hover:text-red-500 transition-colors">{size}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col gap-4">
              {localStorage.getItem("auth-token") ? (
                <button
                  onClick={() => addToCart(product?.id)}
                  className="w-full py-4 bg-red-700 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                >
                  Add_To_Manifest
                </button>
              ) : (
                <Link to="/login">
                  <button className="w-full py-4 border border-zinc-800 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all">
                    Login_Required
                  </button>
                </Link>
              )}

              <div className="flex justify-between items-center px-1">
                <span className="text-[8px] font-mono text-zinc-600 uppercase">Encrypted_Checkout</span>
                <span className="text-[8px] font-mono text-zinc-600 uppercase italic">Local_Time: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ProductDisplay;
