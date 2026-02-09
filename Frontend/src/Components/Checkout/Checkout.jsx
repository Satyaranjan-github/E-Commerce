import React from "react";

const Checkout = () => {
  function getRandomAlphanumericString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result3 = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result3 += characters.charAt(randomIndex);
    }

    return result3;
  }

  // Example usage:
  let randomString = getRandomAlphanumericString(8); // Generates a random alphanumeric string of length 8
  console.log(randomString);


  const [result, setResult] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const onSubmit = async (event) => {
    function getRandomNumberBetween0And5() {
      return Math.floor(Math.random() * 6);
    }

    let randomNumber = getRandomNumberBetween0And5();
    console.log(randomNumber);


    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49a7ad45-8ad1-43cc-a226-0323933286bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("To know your profile details mail on Shopper" + randomNumber + "@gmail.com from registered email");
      setResult2("Your order number is " + randomString);

      alert("Order Placed Successfully");
      alert("To know your profile details mail on Shopper" + randomNumber + "@gmail.com from registered email");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-[#f5f5f5] pt-32 pb-20 px-4 lg:px-20 overflow-hidden">

      {/* 1. Background Atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">

        {/* Header Section */}
        <header className="mb-16 border-l-4 border-red-600 pl-8">
          <span className="text-red-500 uppercase tracking-[0.5em] text-[10px] font-black block mb-2">
            Step_03 // Verification
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
            Final <br />
            <span className="text-transparent stroke-text-white">Manifest</span>
          </h1>
        </header>

        {/* Checkout Form Card */}
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl">
          <form onSubmit={onSubmit} className="space-y-12">

            {/* Section 01: Identification */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-600 rotate-45" />
                <h3 className="text-white text-xs font-black uppercase tracking-[0.3em]">Recipient_ID</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text" placeholder="FIRST NAME" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="LAST NAME" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="PHONE CONTACT" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="SECONDARY CONTACT"
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
              </div>
            </div>

            {/* Section 02: Logistics */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-600 rotate-45" />
                <h3 className="text-white text-xs font-black uppercase tracking-[0.3em]">Drop_Location</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text" placeholder="HOUSE / UNIT NO." required
                  className="md:col-span-1 bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="LANDMARK / AREA" required
                  className="md:col-span-2 bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="STATE / PROVINCE" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="text" placeholder="ZIP CODE" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input
                  type="date" required
                  className="bg-transparent border-b border-white/10 py-4 text-sm font-mono focus:border-red-600 outline-none transition-all text-gray-500"
                />
              </div>
            </div>

            {/* Section 03: Transaction Method */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Payment_Strategy</span>
                <select className="bg-black border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest outline-none focus:border-red-600">
                  <option>Cash On Delivery</option>
                </select>
              </div>

              <button className="w-full md:w-[350px] py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-[12px] hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                Place Order
              </button>
            </div>
          </form>

          {/* Result Messaging */}
          {(result || result2) && (
            <div className="mt-8 p-4 bg-red-600/10 border border-red-600/20 text-center">
              <p className="text-red-500 font-mono text-xs uppercase tracking-widest">{result} {result2}</p>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
    .stroke-text-white { -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4); }
  `}
      </style>
    </div>
  );
};

export default Checkout;



