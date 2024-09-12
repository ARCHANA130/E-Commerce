import React from 'react'
import './retail.css'
import data_product from '../Assetss/data'
import Item from '../items/item'
const Retail = () => {
  return (
    <div className='relate'>
        <h1>Related Products</h1>
        <hr />
        <div className="relateprod">
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
      
    </div>
  )
}

export default Retail
