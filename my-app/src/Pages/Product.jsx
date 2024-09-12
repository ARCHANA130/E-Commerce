import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/breadcrums';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/description/Description';
import Retail from '../components/RetailProduct/Retail';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const prod=all_product.find((e)=>e.id===Number(productId));
  return(<div>
     <Breadcrum prod={prod} />
     <Productdisplay product={prod}/>
     <Description/>
     <Retail/>
  </div>
  
  )
}

export default Product
