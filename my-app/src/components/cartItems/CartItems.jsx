import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../Context/shopcontext'
import remove from '../Assetss/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItem, removeToCart, getTotal}=useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,i)=>{
        if(cartItem[e.id]>0){
            return  (<div key={i}>
                <div className="cart-format format-main">
                    <img src={e.image} alt="" className='cart-img'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className=' cart-remove' src={remove} alt="" onClick={()=>{removeToCart(e.id)}} />
                </div>
                <hr />
              </div>)
        }return null;
      })}
     <div className="cart-down">
        <div className="total">
            <h1>cart Totals</h1>
            <div>
                <div className="cart-total">
                    <p>Subtotal</p>
                    <p>${getTotal()}</p>
                </div>
                <hr />
                <div className="cart-total">
                    <p>Shipping fee</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="cart-total">
                    <h3>Total</h3>
                    <h3>${getTotal()}</h3>
                </div>
               
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo">
            <p>If you have a promo code, Enter it here</p>
            <div className="promocode">
                <input type="text " placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default CartItems
