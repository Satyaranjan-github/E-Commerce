import heroimg from '../../Assets/hero_image.png'

const Hero = () => {
   return (
      <div className="relative min-h-screen bg-[#0b0b0b] text-[#f5f5f5] overflow-hidden flex flex-col lg:flex-row">
         {/* Background Glow */}
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full" />
         {/* Left Content Section */}
         <div className="flex-1 flex flex-col justify-center px-8 lg:pl-24 z-10 pt-20 lg:pt-0 lg:max-w-[45%]">
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-red-500 font-bold mb-4 block">
               Limited Edition / 2026
            </span>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black italic uppercase leading-[0.9] mb-6">
               New <br />
               <span className="text-transparent stroke-text">Arrivals</span>
            </h1>
            <p className="max-w-sm text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
               Revolutionizing the everyday wardrobe with architectural silhouettes and premium fabrics.
            </p>
            <button className="group relative w-fit px-10 py-4 border border-white/20 hover:border-red-500 transition-colors duration-300">
               <span className="relative z-10 font-bold uppercase tracking-widest text-sm">View Drop</span>
               <div className="absolute inset-0 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
         </div>
         <div className="flex-1 relative flex items-center overflow-hidden py-12 lg:py-0">
            <div className="flex gap-8 overflow-x-scroll px-10 pb-12 pt-10 no-scrollbar snap-x lg:max-w-[700px] xl:max-w-[900px]">
               {/* Card 1 */}
               <div className="min-w-[280px] md:min-w-[350px] aspect-[3/4] bg-zinc-900 snap-center relative group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={heroimg} alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6 z-20">
                     <p className="text-xs uppercase tracking-widest text-red-500 font-bold">01</p>
                     <h3 className="text-xl font-bold uppercase italic">Vanguard Hoodie</h3>
                  </div>
               </div>
               {/* Card 2 */}
               <div className="min-w-[280px] md:min-w-[350px] aspect-[3/4] bg-zinc-900 snap-center relative group lg:mt-20">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={heroimg} alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6 z-20">
                     <p className="text-xs uppercase tracking-widest text-red-500 font-bold">02</p>
                     <h3 className="text-xl font-bold uppercase italic">Phantom Tech Pant</h3>
                  </div>
               </div>
               {/* Card 3 */}
               <div className="min-w-[280px] md:min-w-[350px] aspect-[3/4] bg-zinc-900 snap-center relative group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={heroimg} alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6 z-20">
                     <p className="text-xs uppercase tracking-widest text-red-500 font-bold">03</p>
                     <h3 className="text-xl font-bold uppercase italic">Cyber Utility Vest</h3>
                  </div>
               </div>
            </div>
         </div>

         <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #f5f5f5;
        }
        /* Custom Scrollbar Styling */
        .no-scrollbar::-webkit-scrollbar {
          height: 3px;
        }
        .no-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444; 
        }
      `}</style>
      </div>
   )
}

export default Hero
