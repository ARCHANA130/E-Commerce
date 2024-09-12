import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import ListProduct from '../../components/listproduct/ListProduct'
import Addproduct from '../../components/addproduct/Addproduct'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />

      </Routes>
    </div>
  )
}

export default Admin
