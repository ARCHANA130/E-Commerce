import React from 'react'
import './addpro.css'
import upload from '../../assets/upload_area.svg'
import { useState } from 'react'
const Addproduct = () => {
    const [image,setimage]=useState(false);
    const [details,setdetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    
    })
    const imagehandler=(e)=>{
         setimage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setdetails({...details,[e.target.name]:e.target.value})
    }
    const add_product=async ()=>{
        console.log(details)
        let responseData;
        let product=details;
        let formdata=new FormData();
        formdata.append('product', image);
        await fetch('http://localhost:4000/upload', {
          method: 'POST',
         headers:{
          Accept:'application/json',
         }, body: formdata,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
          product.image=responseData.img_url;
          console.log(product)
          await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert('Product added'):alert('Failed')
          })
        }
    }
  return (
    <div className='add-pro'>
      <div className="item">
        <p>Product title</p>
        <input value={details.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="add-price">
        <div className="item">
            <p>Price</p>
            <input type="text" value={details.old_price} name='old_price' onChange={changeHandler} placeholder='Type here' />
  
        </div>
        <div className="item">
            <p>Offer Price</p>
            <input type="text" value={details.new_price} name='new_price'  onChange={changeHandler} placeholder='Type here' />
  
        </div>
      </div>
      <div className="itemfield">
        <p>Product Category</p>
        <select value={details.category} onChange={changeHandler}name="category" className='addselect'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kids</option>

        </select>
      </div>
<div className="addproitem">
    <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):upload} alt="" className='thumbnail' />
    </label>
    <input onChange={imagehandler} type="file" name="image" id="file-input" hidden />
</div>
<button className='btn' onClick={()=>{add_product()}}>Add</button>
    </div>
  )
}

export default Addproduct
