import React from 'react'
import './NewC.css'

import Item from '../items/item'
import { useState } from 'react'
import { useEffect } from 'react'
const NewCollection = () => {
  const [new_collection, setnew_collection]=useState([])
  useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
     .then((res)=>res.json())
     .then((data)=>setnew_collection(data))
     .catch((err)=>console.log(err))
  
  }, [])
  return (
    <div className='new_collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
