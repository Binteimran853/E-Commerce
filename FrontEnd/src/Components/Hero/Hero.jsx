import React from 'react'
import "./Hero.css"
import hand_icon from "../assets/hand_icon.png"
import hero_image from "../assets/hero_image.png"
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
   <div className="hero">
  <div className="left-hero">
    <h2>NEW ARRIVALS ONLY</h2>
    <h1>new <img className='hand-icon' src={hand_icon} alt="" /></h1>
    <h1>collections</h1>
    <h1>only for you</h1>
    <div className="button">
       Latest Collections 
       <img src={arrow} alt="" />
    </div>
  </div>
  <div className="right-hero">
<img src={hero_image} alt="" />
  </div>
   </div>
  )
}

export default Hero
