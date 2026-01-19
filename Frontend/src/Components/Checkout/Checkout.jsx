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
    <div className="
  w-full h-screen
  bg-[#fce3fe]
  pt-[100px] pb-[200px]
">

      <div
        className="
      w-[580px] h-[900px] mx-auto
      bg-white
      px-[60px] py-[40px]
      max-[800px]:w-[400px] max-[800px]:h-[800px]
      max-[500px]:w-[300px] max-[500px]:h-[800px]
    "
      >
        <h1 className="my-[20px]">Checkout</h1>

        <p className="text-[#5c5c5c] text-[20px] font-medium">
          <span className="text-red-500">*</span> Please enter your details
        </p>

        <form onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alternative Phone Number"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="number"
                    placeholder="House Number"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Land Mark"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="State"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Zip Code"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
              </tr>

              <tr>
                <td className="text-[20px] font-semibold">
                  Select Payment Method
                </td>
                <td>
                  <select
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[500px]:w-[100px]
                "
                  >
                    <option>Cash On Delivery</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td className="text-[20px] font-semibold">
                  Select Delivery Date
                </td>
                <td>
                  <input
                    type="date"
                    required
                    className="
                  m-[20px_10px]
                  pt-[15px] pb-[15px] pl-[20px]
                  border border-[#888] rounded-[5px]
                  text-[20px] outline-none
                  max-[800px]:w-[150px]
                  max-[500px]:w-[100px]
                "
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Button */}
          <button
            className="
          mt-[30px]
          pt-[15px] pb-[15px]
          w-[580px]
          bg-[#ef1c1c] text-white
          text-[24px]
          rounded-[5px]
          cursor-pointer
          border-0
          max-[800px]:w-[400px]
          max-[500px]:w-[300px]
        "
          >
            Place Order
          </button>
        </form>

        {/* Result Messages */}
        <span className="block text-red-500 text-[20px] font-medium mt-2">
          {result}
        </span>
        <span className="block text-red-500 text-[20px] font-medium">
          {result2}
        </span>
      </div>
    </div>
  );
};

export default Checkout;



