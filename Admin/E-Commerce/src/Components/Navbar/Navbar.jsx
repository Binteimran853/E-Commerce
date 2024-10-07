import React from 'react';
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <nav className='Admin-narbar'>
      <img id='admin-nav-logo' src={nav_logo} alt="nShopper_logo" />
      <img id='admin-nav-profile' src={nav_profile} alt="admin_profile" />
      
    </nav>
  )
}
