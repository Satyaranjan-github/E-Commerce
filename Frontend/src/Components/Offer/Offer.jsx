import exclusive_img from '../../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="w-[65%] h-[60vh] flex mx-auto px-[140px] mb-[150px]
                bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
                max-[1280px]:px-[80px] max-[1280px]:mb-[120px]
                max-[1024px]:px-[60px] max-[1024px]:mb-[100px]
                max-[800px]:mt-[40px] max-[800px]:px-[40px] max-[800px]:mb-[90px]">

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[60px] font-semibold
                   max-[1280px]:text-[50px]
                   max-[800px]:text-[40px]">
          Exclusive
        </h1>

        <h1 className="text-[#171717] text-[60px] font-semibold
                   max-[1280px]:text-[50px]
                   max-[800px]:text-[40px]">
          Offer For You
        </h1>

        <p className="text-[#171717] text-[20px] font-semibold mt-0
                  max-[1280px]:text-[22px] max-[1280px]:mt-[10px]
                  max-[1024px]:text-[20px]
                  max-[800px]:text-[20px]">
          Only on Best Sellers Product
        </p>

        <button
          className="w-[282px] h-[70px] rounded-full mt-[30px]
                 bg-[#ff4141] text-white text-[22px] font-medium
                 cursor-pointer
                 max-[1280px]:w-[240px] max-[1280px]:h-[65px]
                 max-[1280px]:mt-[25px] max-[1280px]:text-[20px]
                 max-[1024px]:w-[200px] max-[1024px]:h-[55px]
                 max-[1024px]:mt-[20px] max-[1024px]:text-[18px]
                 max-[800px]:w-[180px] max-[800px]:h-[45px]
                 max-[800px]:text-[16px]">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center pt-[50px]
                  max-[800px]:hidden">
        <img src={exclusive_img} alt="Exclusive Offer" />
      </div>
    </div>
  )
}

export default Offer
