import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../Context/shopcontext";
import star from "../Assetss/star_icon.png";
import star_dull from "../Assetss/star_dull_icon.png";
const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart} =useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="old">${product.old_price}</div>
          <div className="new">${product.new_price}</div>
        </div>
        <div>
        A Lightweight, usually knitted pullover shirt with short sleeves,
        a flattering, tailored waist, and a pocket on the right side.
        </div>
        <div className="size">
          <h1>Select size</h1>
          <div className="prodsize">
            <div className="size-btn">S</div>
            <div className="size-btn">M</div>
            <div className="size-btn">L</div>
            <div className="size-btn">XL</div>
            <div className="size-btn">XXL</div>
          </div>
         
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="prodcat"><span>Category:</span>Women, T-shirt, Crop Top</p>
          <p className="prodcat"><span>Tags:</span>Moder, Latest</p>
      </div>
    </div>
  );
};

export default Productdisplay;
