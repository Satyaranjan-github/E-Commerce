import React, { useEffect, useState } from "react";
export const ShopContext = React.createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {

  const [all_product, setAll_product] = useState([]);
  const [cart, setCart] = React.useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_product(data))

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:5000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: ""
      }).then((response) => response.json())
        .then((data) => setCart(data));
    }
  }, [])

  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:5000/addtocart', {
        method: "POST",
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }


  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:5000/removefromcart', {
        method: "POST",
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };


  const gettotalamount = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let iteminfo = all_product.find((p) => p.id === Number(item))
        total += cart[item] * iteminfo.new_price
      }
    }
    return total
  }


  const getTotalcartitems = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        total += cart[item];
      }
    }
    return total;
  };

  const contextValue = { all_product, cart, addToCart, removeFromCart, gettotalamount, getTotalcartitems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.childrens}
    </ShopContext.Provider>
  );

};

export default ShopProvider;
