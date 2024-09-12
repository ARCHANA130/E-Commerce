import React from 'react'
import './popular.css'
import Item from '../items/item'
import { useState } from 'react'
import { useEffect } from 'react'

const Popular = () => {
  const [data, setdata]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popular').then((res)=>res.json()).then((data)=>setdata(data)).catch((err)=>console.log(err))
  }, [])
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
      {data.map((item,i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
