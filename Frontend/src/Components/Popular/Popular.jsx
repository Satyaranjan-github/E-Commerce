import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";

const Popular = () => {

  const[popularProducts,setPopularProducts]=useState([]);


  useEffect(()=>{
   fetch('http://localhost:5000/popularinwomen')
   .then((response)=>response.json())
   .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular_item">
        {popularProducts.map((p, i) => {
          return (
            <Item
              key={i}
              id={p.id}
              img={p.image}
              name={p.name}
              new_price={p.new_price}
              old_price={p.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
