const Breakcrum = (props) => {
  const { product } = props;

  return (
    <nav className="w-full bg-[#0b0b0b] pt-24">
      <div className="max-w-[1440px] mx-auto px-6 ">

        {/* Breadcrumb Container */}
        <div className="relative inline-flex items-center gap-4 py-3 px-6 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-md group overflow-hidden">

          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Navigation Links */}
          <div className="relative z-10 flex items-center gap-3 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em]">

            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors duration-300">
              Home
            </span>

            <span className="text-red-600/40 font-black">/</span>

            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors duration-300"
              onClick={() => window.location.href = `/${product?.category}`}>
              {product?.category}
            </span>

            <span className="text-red-600/40 font-black">/</span>

            <span className="text-white font-black italic flex items-center gap-2">
              {/* Active Dot Indicator */}
              <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
              <span className="truncate max-w-[120px] md:max-w-none">
                {product?.name}
              </span>
            </span>
          </div>

        </div>

        {/* Subtle bottom line decor */}
        <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-white/10 to-transparent mt-8" />
      </div>
    </nav>
  );
};

export default Breakcrum;
