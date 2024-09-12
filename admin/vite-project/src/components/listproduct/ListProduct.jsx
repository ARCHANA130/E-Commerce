import React, { useEffect, useState } from 'react'
import './listpro.css'
import remove from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproducts, setallproducts] = useState([]);
  const fetchinfo=async ()=>{
    await fetch('http://localhost:4000/allproducts').then((resp)=>resp.json()).then((data)=>{setallproducts(data)})
  }
  useEffect(()=>{
    fetchinfo();
  },[])
    const remove_product=async (id)=>{
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{Accept:'application/json','Content-Type':'application/json'},
        body:JSON.stringify({id:id})
      })
      await fetchinfo();
    }

  return (
    <div className='list-pro'>
      <h1>All Products List</h1>
      <div className="main">
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listall">
        <hr />
        {allproducts.map((product, index)=>{
           return<> <div key={index} className="main list-format">
               <img className='prod-item' src={product.image} alt="" />
               <p>{product.name}</p>
               <p>${product.old_price}</p>
               <p>${product.new_price}</p>
               <p>{product.category}</p>
               <img onClick={()=>{remove_product(product.id)}} src={remove} alt="" className="list-remove" />
           </div>
           <hr />
           </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
