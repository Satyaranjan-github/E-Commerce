import item from "../../Assets/data";
import Item from "../Items/Item";

const Relatedproduct = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 h-[90vh] max-[1280px]:h-[80vh] max-[800px]:h-[80vh] max-[500px]:h-[80vh] max-[500px]:mb-[100px]">

      <h1 className="text-[50px] font-semibold text-black max-[1280px]:text-[40px] max-[800px]:text-[30px] max-[500px]:text-[20px]">
        Related Products
      </h1>

      <hr className="w-[100px] h-[6px] rounded-[10px] bg-[#252525] border-none" />

      <div className="mt-[50px] flex gap-[30px] max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-[20px]">
        {item.map((p, i) => (
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

export default Relatedproduct;
