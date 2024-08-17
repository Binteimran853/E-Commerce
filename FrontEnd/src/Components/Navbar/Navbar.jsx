import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart from "../assets/cart_icon.png"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const Navbar = () => {
  const [select_catagory, setCatagory] = useState("Shop")
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={logo} className='shopper-logo' />
        <h1>Shopper</h1>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setCatagory("Shop") }}><Link to='/' style={{ textDecoration: 'none', color: 'black' }} >Shop</Link>{select_catagory == "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setCatagory("Men") }}><Link to='/men' style={{ textDecoration: 'none', color: 'black' }}>Men</Link>{select_catagory == "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setCatagory("Women") }}><Link to='/women' style={{ textDecoration: 'none', color: 'black' }}>Women</Link>{select_catagory == "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setCatagory("Kids") }}><Link to='/kid' style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>{select_catagory == "Kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="login-btn">
        <Link to='/login' ><button type="button" className='button' onClick={()=>{setCatagory("Login")}}    style={{ textDecoration: 'none', color: 'black' }}>Login</button>{select_catagory==="Login"? <></>:<></>}</Link>
        <Link to='/cart'> <img src={cart} className='cart-logo' /></Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
