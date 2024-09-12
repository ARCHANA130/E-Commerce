import React, { useContext } from 'react'
import './CSS/shopcat.css'
import { ShopContext } from '../Context/shopcontext'
import drop_down from '../components/Assetss/dropdown_icon.png'
import Item from '../components/items/item'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-banner' src={props.banner} alt="" />
      <div className="shopcategory-index">
        <p><span>Showing 1-12</span> Out of 36 products</p>
        <div className="shopcat-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
          if(props.category === item.category){
            return (
             <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcat-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
