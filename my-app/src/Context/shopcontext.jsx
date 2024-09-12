import React, {useState,createContext} from 'react';
import { useEffect } from 'react';


export const ShopContext = createContext(null);
const cartdefault=()=>{
      let cart={};
      for (let index = 0; index < 300+1; index++) {
           cart[index]=0;          
      }
      return cart;
}
const ShopContextProvider = (props) => {
      const [all_product, setall_product]=useState([])
      const [cartItem, setcartItem]=useState(cartdefault(null));

      useEffect(()=>{
            fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>setall_product(data))
            if(localStorage.getItem('auth-token')){
                  fetch('http://localhost:4000/getcart', {
                        method: 'POST',
                        headers: {Accept:'application/form-data',
                              'auth-token':`${localStorage
                               .getItem('auth-token')}`,       
                              'Content-Type': 'application/json'},
                        body: ""
                      }).then(res=>res.json()).then((data)=>setcartItem(data))
     
            }
      },[])
   
      const addToCart=(itemId)=>{
                 setcartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}));
                 if(localStorage.getItem('auth-token')){
                  fetch('http://localhost:4000/addtocart', {
                        method: 'POST',
                        headers: {Accept:'application/form-data',
                              'auth-token':`${localStorage
                               .getItem('auth-token')}`,       
                              'Content-Type': 'application/json'},
                        body: JSON.stringify({"Itemid":itemId})
                      }).then(res=>res.json()).then((data)=>console.log(data))
                 }
              
      }
      const removeToCart=(itemId)=>{
            setcartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
            if(localStorage.getItem('auth-token')){
                  fetch('http://localhost:4000/removefromcart', {
                        method: 'POST',
                        headers: {Accept:'application/form-data',
                              'auth-token':`${localStorage
                               .getItem('auth-token')}`,       
                              'Content-Type': 'application/json'},
                        body: JSON.stringify({"Itemid":itemId})
                      }).then(res=>res.json()).then((data)=>console.log(data))
                 }
      }
    const getTotal=()=>{
      let totalamount=0;
      for(const item in cartItem){
           if(cartItem[item]>0){
            let info=all_product.find((product)=>product.id===Number(item))
             totalamount+=info.new_price*cartItem[item];
             
           }
      }return totalamount;
}
      const getTotalItem=()=>{
            let total=0;
             for(const item in cartItem){
                  if(cartItem[item]>0){
                        total+=cartItem[item];
                  }
                
            } return total; 
      }
           
            
    
      const contextValue = {getTotalItem, all_product, cartItem, addToCart, removeToCart, getTotal};
   
     
      return (
            <ShopContext.Provider value={contextValue}>
                  {props.children}
            </ShopContext.Provider>
      );
}


export default ShopContextProvider;