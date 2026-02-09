const NewsLetter = () => {
  return (
    <div className="w-[90%] lg:w-[85%] max-w-[1400px] mx-auto mb-[150px] relative overflow-hidden rounded-[2rem] bg-[#141414] border border-white/5 py-20 px-6">

      {/* Subtle Background Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black uppercase italic">Newsletter</h2>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Decorative Badge */}
        <div className="mb-6 px-4 py-1 border border-red-600/30 rounded-full bg-red-600/5">
          <span className="text-red-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            Join the inner circle
          </span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-black italic uppercase leading-none mb-4">
          Get <span className="text-transparent stroke-text-white">Exclusive</span> Offers
        </h1>

        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-md tracking-wide font-light">
          No spam. Just early access to drops, private sales, and the latest style reports directly to your inbox.
        </p>

        {/* Input Group */}
        <div className="relative w-full max-w-lg group">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 bg-white/5 border border-white/10 rounded-2xl sm:rounded-full p-2 focus-within:border-red-600/50 transition-all duration-300">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="w-full bg-transparent px-6 py-3 text-white text-xs tracking-widest outline-none placeholder:text-gray-600"
            />
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-xl sm:rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-95">
              Subscribe
            </button>
          </div>

          {/* Decorative Glow under input */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-red-600/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
        </div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}

export default NewsLetter
