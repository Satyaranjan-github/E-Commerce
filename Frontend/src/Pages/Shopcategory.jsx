import React from 'react'
import './Shopcategory.css'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import dp_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const Shopcategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shopcategory'>
       <img  className="shopcategory-banner" src={props.banner} alt="" />
       <div className="shopcategory-indexsort">
        <p>
          <span>Showing  1-12</span> out of 36 products
        </p>

        <div className="shocategory-sort">
          Sort by <img src={dp_icon} alt="" />
        </div>
       </div>
       <div className='shopcategory-products'>
        {all_product.map((p,i)=>{
          if(props.category===p.category){
            return (
              <Item
                key={i}
                id={p.id}
                img={p.image}
                name={p.name}
                new_price={p.new_price}
                old_price={p.old_price}
              />
            )
          }
          else{
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
