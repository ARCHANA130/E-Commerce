import React from 'react'
import './Sidebar.css'
import addproduct from '../../assets/Product_cart.svg'
import list from '../../assets/Product_list_icon.svg'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
    <div className="sidebar-item">
        <img src={addproduct} alt="" />
        <p>Add Product</p>
    </div>
     </Link>
     <Link to={'/listproduct'} style={{textDecoration:"none"}}>
    <div className="sidebar-item">
        <img src={list} alt="" />
        <p> Product List</p>
    </div>
     </Link>
     
    </div>
  )
}

export default Sidebar
