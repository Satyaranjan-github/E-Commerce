import { useContext } from 'react'
import dp_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
import { ShopContext } from '../Context/ShopContext'
import './Shopcategory.css'


const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Total </span>{all_product.length} products
        </p>

        <div className="shocategory-sort">
          Sort by <img src={dp_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
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
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
