import { useContext } from 'react'
import dp_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
import { ShopContext } from '../Context/ShopContext'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className="block mx-auto my-[30px] w-[82%] xl:my-[20px] xl:w-[90%] md:w-[95%]"
        src={props.banner} alt="" />
      <div className="flex items-center justify-between mx-auto w-[90%]">
        <p className="text-sm xl:text-xs">
          <span className="text-[20px] font-semibold">Total </span>
          {all_product.length} products
        </p>

        <div className="flex items-center gap-2 rounded-full border border-[#888] px-5 py-2 xl:px-2 xl:py-1">
          Sort by <img src={dp_icon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {all_product.map((p, i) => {
          if (props.category === p.category) {
            return (
              <div key={i} >
                <Item
                  id={p.id}
                  img={p.image}
                  name={p.name}
                  new_price={p.new_price}
                  old_price={p.old_price}
                />
              </div>
            )
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="mx-auto my-[150px] flex items-center justify-center h-[69px] w-[233px]cursor-pointer rounded-full bg-[#ededed] text-[18px] font-medium text-[#787878] xl:my-[100px] xl:h-[60px] xl:w-[200px] xl:text-[16px] md:my-[60px] md:h-[40px] md:w-[150px] md:text-[13px]">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
