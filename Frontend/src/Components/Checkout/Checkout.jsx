import React from "react";
import "./Checkout.css";

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
      setResult("To know your profile details mail on Shopper" + randomNumber +"@gmail.com from registered email" );
      setResult2("Your order number is " + randomString);

      alert("Order Placed Successfully");
      alert("To know your profile details mail on Shopper" + randomNumber +"@gmail.com from registered email" );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-form">
        <h1>Checkout</h1>
        <p>
          {" "}
          <span>*</span> Please enter your details
        </p>
        <form onSubmit={onSubmit}>
          <table>
            <tr>
              <td>
                <input type="text" placeholder="First Name" required />
              </td>
              <td>
                <input type="text" placeholder="Last Name" required />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Phone Number" required />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Alternative Phone Number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" placeholder="House Number" required />
              </td>
              <td>
                <input type="text" placeholder="Land Mark" required />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="State" required />
              </td>
              <td>
                <input type="number" placeholder="Zip Code" required />
              </td>
            </tr>
            <tr>
              <td className="td">Select Payment Method</td>
              <td>
                <select>
                  <option>Cash On Delivery</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="td">Select Delivery Date</td>
              <td>
                <input type="date" placeholder="Delivery Date" required />
              </td>
            </tr>
          </table>
          <button>Place Order</button>
        </form>
        <span className="result">{result}</span> <br />
        <span className="result">{result2}</span>
      </div>
    </div>
  );
};

export default Checkout;



