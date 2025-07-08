import React from "react";
import "./Relatedproduct.css";
import Item from "../Items/Item";
import item from "../../Assets/data";
const Relatedproduct = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-items">
        {item.map((p, i) => {
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

export default Relatedproduct;
