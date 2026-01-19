const Breakcrum = (props) => {
  const { product } = props;
  return (
    <div
      className="
    flex items-center gap-[8px]
    text-[#5e5e5e] font-semibold capitalize
    text-[20px]
    my-[60px] mx-[170px]

    max-[1280px]:my-[30px] max-[1280px]:mx-[50px] max-[1280px]:text-[16px]
    max-[1024px]:my-[30px] max-[1024px]:mx-[30px] max-[1024px]:text-[14px]
    max-[800px]:my-[30px] max-[800px]:mx-[20px] max-[800px]:text-[12px]
    max-[500px]:my-[30px] max-[500px]:mx-[10px] max-[500px]:text-[14px]
  "
    >
      HOME -- SHOP {product.category} -- {product.name}
    </div>
  );
};

export default Breakcrum;
