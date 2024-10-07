import React from 'react';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import {Routes,Route} from "react-router-dom";
import {Addproduct} from "../../Components/Addproduct/Addproduct.jsx";
import {Listproduct} from '../../Components/Listproduct/Listproduct.jsx';
import "./Admin.css"
export const Admin = () => {
  return (
    <div className='Admin'>
       
       <Sidebar/>
        <Routes>

           
            
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
        </Routes>
    </div>
  )
}
