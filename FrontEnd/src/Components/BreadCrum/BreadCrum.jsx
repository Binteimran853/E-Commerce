import React from 'react'
import "./BreadCrum.css"
import arrow_icon from "../assets/breadcrum_arrow.png"
export const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'> 
    HOME <img className='arrow_icon' src={arrow_icon} alt="" /> Shop <img className='arrow_icon' src={arrow_icon} alt="" /> {product.category} <img className='arrow_icon' src={arrow_icon} alt="" />
     {product.name}</div>
  )
}
