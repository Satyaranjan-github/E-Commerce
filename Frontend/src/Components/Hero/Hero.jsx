import arrowicon from '../../Assets/arrow.png'
import handicon from '../../Assets/hand_icon.png'
import heroimg from '../../Assets/hero_image.png'

const Hero = () => {
   return (
      <div className="flex h-screen bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] m-0 max-[500px]:flex-col max-[500px]:items-center max-[500px]:justify-center">

         {/* Left Section */}
         <div className="
    flex-1 flex flex-col justify-center gap-5 leading-tight
    pl-[180px]
    max-[1280px]:pl-[100px]
    max-[1024px]:pl-[80px]
    max-[800px]:p-10
  ">
            <h2 className="
      text-[#090909] font-bold
      text-[20px]
      max-[1280px]:text-[22px]
      max-[1024px]:text-[20px]
      max-[800px]:text-[16px]
      max-[500px]:text-[18px]
    ">
               NEW ARRIVALS ONLY
            </h2>

            <div>
               <div className="flex items-center gap-5">
                  <p className="
          text-[#171717] font-bold
          text-[100px]
          max-[1280px]:text-[80px]
          max-[1024px]:text-[50px]
          max-[800px]:text-[40px]
          max-[500px]:text-[40px]
        ">
                     New
                  </p>
                  <img
                     src={handicon}
                     alt=""
                     className="
            w-[105px]
            max-[1280px]:w-[75px]
            max-[1024px]:w-[65px]
            max-[800px]:w-[50px]
            max-[500px]:w-[40px]
          "
                  />
               </div>

               <p className="
        text-[#171717] font-bold
        text-[100px]
        max-[1280px]:text-[80px]
        max-[1024px]:text-[50px]
        max-[800px]:text-[40px]
        max-[500px]:text-[40px]
      ">
                  Collections
               </p>

               <p className="
        text-[#171717] font-bold
        text-[100px]
        max-[1280px]:text-[80px]
        max-[1024px]:text-[50px]
        max-[800px]:text-[40px]
        max-[500px]:text-[40px]
      ">
                  For everyone
               </p>
            </div>

            {/* Button */}
            <div className="
      flex items-center justify-center gap-4
      w-[310px] h-[70px] rounded-full mt-[30px]
      bg-[#ff4141] text-white font-medium
      text-[22px]
      max-[1280px]:gap-2 max-[1280px]:w-[250px] max-[1280px]:h-[60px] max-[1280px]:text-[18px] max-[1280px]:mt-[20px]
      max-[1024px]:w-[220px] max-[1024px]:h-[50px] max-[1024px]:text-[16px]
      max-[800px]:w-[180px] max-[800px]:h-[40px] max-[800px]:text-[14px]
      max-[500px]:w-[160px] max-[500px]:h-[50px] max-[500px]:text-[16px]
    ">
               <div>Latest Collection</div>
               <img src={arrowicon} alt="" />
            </div>
         </div>

         {/* Right Section */}
         <div className="flex-1 flex justify-center items-center">
            <img
               src={heroimg}
               alt=""
               className="
        max-[1280px]:w-[500px]
        max-[1024px]:w-[400px]
        max-[800px]:w-[300px]
        max-[500px]:hidden
      "
            />
         </div>
      </div>
   )
}

export default Hero
