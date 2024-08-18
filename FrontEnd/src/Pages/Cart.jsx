import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import { CartItem } from '../Components/CartItem/CartItem'
import { ShopContext } from '../Context/ShopContext'
// In pages we use their respective components
const Cart = () => {
  
  return (
    <div>
      <CartItem/>
    </div>
  )
}

export default Cart
