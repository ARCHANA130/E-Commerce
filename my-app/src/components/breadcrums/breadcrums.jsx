import React from 'react'
import './breadcrum.css'
import arrow from '../Assetss/breadcrum_arrow.png'
const Breadcrum = (props) => {
   const {prod}=props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow} alt="" />SHOP <img src={arrow} alt="" />
      {prod.category} <img src={arrow} alt="" /> {prod.name}
    </div>
  )
}

export default Breadcrum
