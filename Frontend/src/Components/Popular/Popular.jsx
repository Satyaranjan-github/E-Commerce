import { useEffect, useState } from "react";
import Item from "../Items/Item";

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, [])

  return (
    <div
      className="
    flex flex-col items-center gap-[10px] h-[90vh]
    max-[1280px]:h-[80vh]
    max-[1024px]:h-[80vh]
    max-[800px]:h-[50vh]
    max-[500px]:h-[80vh]
  "
    >
      <h1
        className="
      text-[#171717] text-[50px] font-bold
      max-[1280px]:text-[40px]
      max-[1024px]:text-[40px]
      max-[800px]:text-[30px]
      max-[500px]:text-[30px]
    "
      >
        Popular in women
      </h1>

      <hr
        className="
      w-[100px] h-[6px] rounded-[10px] bg-[#252525] border-none
      max-[1280px]:w-[70px] max-[1280px]:h-[4px] max-[1280px]:mb-[10px]
      max-[1024px]:w-[70px] max-[1024px]:h-[4px] max-[1024px]:mb-[10px]
      max-[800px]:w-[60px] max-[800px]:h-[4px] max-[800px]:mb-[10px]
    "
      />

      <div
        className="
      flex gap-[30px]
      max-[1280px]:gap-[20px] max-[1280px]:mt-[30px]
      max-[1024px]:gap-[15px] max-[1024px]:mt-[25px]
      max-[800px]:gap-[10px]
      max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-[20px]
    "
      >
        {popularProducts.map((p, i) => (
          <Item
            key={i}
            id={p.id}
            img={p.image}
            name={p.name}
            new_price={p.new_price}
            old_price={p.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
