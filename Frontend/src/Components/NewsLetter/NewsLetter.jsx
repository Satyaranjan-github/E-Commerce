const NewsLetter = () => {
  return (
    <div
      className="w-[65%] h-[40vh] flex flex-col items-center justify-center
             mx-auto mb-[150px] gap-[30px] px-[140px]
             bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
             max-[1024px]:h-[40vh]
             max-[800px]:h-[50vh] max-[800px]:px-[40px]
             max-[500px]:h-[50vh] max-[500px]:px-[30px]"
    >
      <h1
        className="text-[#454545] text-[55px] font-semibold text-center
               max-[1024px]:text-[50px]
               max-[800px]:text-[40px]
               max-[500px]:text-[40px]"
      >
        Get Exclusive Offers on your email
      </h1>

      <p
        className="text-[#454545] text-[20px] font-semibold text-center
               max-[1024px]:text-[18px]"
      >
        Subscribe to our newsletter and stay updated
      </p>

      <div
        className="flex items-center justify-between bg-white
               w-[730px] h-[70px] rounded-[80px]
               border border-[#252525]
               max-[800px]:w-[370px] max-[800px]:h-[50px]
               max-[500px]:w-[350px]"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[500px] ml-[30px] border-none outline-none
                 text-[#616161] text-[16px] font-semibold
                 max-[800px]:w-full max-[800px]:ml-[20px]"
        />

        <button
          className="w-[210px] h-[70px] rounded-[80px]
                 bg-black text-white text-[16px] cursor-pointer
                 max-[800px]:w-full max-[800px]:h-[50px]
                 max-[500px]:ml-[10px]"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
