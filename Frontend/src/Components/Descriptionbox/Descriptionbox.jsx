const Descriptionbox = () => {
  return (
    <div className="my-24 mx-6 lg:mx-20 max-w-[1440px] xl:mx-auto">
      {/* Modern Tab Navigation */}
      <div className="flex items-end gap-1">
        <button className="relative px-10 py-5 bg-[#0b0b0b] border-t border-l border-r border-white/10 rounded-t-xl overflow-hidden group">
          {/* Active Indicator Line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">
            01_Description
          </span>
        </button>
        <button className="px-10 py-5 bg-white/[0.02] border-t border-l border-r border-white/5 rounded-t-xl hover:bg-white/[0.05] transition-all group">
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-gray-300">
            02_Reviews <span className="text-red-600/50 text-[9px] ml-1">(122)</span>
          </span>
        </button>
      </div>
      {/* Content Container */}
      <div className="relative overflow-hidden bg-[#0b0b0b] border border-white/10 p-8 md:p-16 rounded-b-2xl rounded-tr-2xl shadow-2xl">

        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[10vw] font-black italic">SPECS</span>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Detailed Text (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-red-600 rotate-45" />
              <h3 className="text-white text-xs font-black uppercase tracking-[0.3em]">Technical Overview</h3>
            </div>

            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-loose tracking-wide font-light">
              <p>
                Experience the pinnacle of <span className="text-white font-medium">textile innovation</span>. This artifact is engineered with high-density poly-fibers, providing an unmatched structural drape while maintaining essential breathability for the modern nomad.
              </p>
              <p>
                The silhouette is meticulously carved to follow natural ergonomic movement, featuring <span className="text-red-500/80">reinforced micro-stitching</span> at high-stress points. This is not just apparel; it is a calibrated tool for the urban environment.
              </p>
            </div>
          </div>

          {/* Right: Technical Metadata (4 columns) */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-8 rounded-xl backdrop-blur-sm">
            <h4 className="text-[10px] text-gray-500 uppercase tracking-[0.5em] mb-6 font-bold border-b border-white/5 pb-4">
              Material_Composition
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Durability", value: "High-Grade" },
                { label: "Fabric", value: "90% Tech-Nylon" },
                { label: "Weight", value: "450 GSM" },
                { label: "Origin", value: "Global Archive" }
              ].map((stat, i) => (
                <li key={i} className="flex justify-between items-center border-b border-white/[0.03] pb-2">
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest">{stat.label}</span>
                  <span className="text-[11px] text-white font-mono">{stat.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <div className="w-12 h-[1px] bg-red-600/30" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Descriptionbox;
