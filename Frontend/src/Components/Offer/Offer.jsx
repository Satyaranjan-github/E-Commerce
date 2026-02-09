import exclusive_img from '../../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="w-[90%] lg:w-[85%] max-w-[1400px] min-h-[500px] mx-auto mb-[150px] relative overflow-hidden rounded-3xl bg-[#0f0f0f] border border-white/5 shadow-2xl flex flex-col md:flex-row">

      {/* Background Stylized Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-600/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-20 z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-red-600"></div>
          <span className="text-red-500 uppercase tracking-[0.4em] text-xs font-bold">
            Limited Time
          </span>
        </div>

        <h2 className="text-white text-5xl lg:text-7xl font-black italic uppercase leading-none">
          Exclusive <br />
          <span className="text-transparent stroke-text-white">Offer For You</span>
        </h2>

        <p className="text-gray-400 text-lg mt-6 max-w-sm font-light leading-relaxed tracking-wide">
          Unlock access to our vault. Our best-selling silhouettes are now available with exclusive seasonal pricing.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            Check Now
          </button>
          <p className="text-[10px] uppercase tracking-tighter text-gray-500 max-w-[120px]">
            *Applied at checkout while stocks last
          </p>
        </div>
      </div>

      {/* Right Section: Image with Depth */}
      <div className="flex-1 relative flex justify-center items-end overflow-hidden pt-10 md:pt-0">
        {/* Decorative Circle behind image */}
        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full bottom-[-50px]" />

        <img
          src={exclusive_img}
          alt="Exclusive Offer"
          className="relative z-10 w-[80%] md:w-full max-h-[500px] object-contain transition-transform duration-700 hover:scale-105"
        />
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  )
}

export default Offer
