import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import "./CartItem.css"
export const CartItem = () => {
  const { all_product, cartItems, addToCart, removeFromCart,getCartAmount } =
    useContext(ShopContext);

  return (
    <div className="Cart-items">
      <div className="cartItems-main">
        <p style={{ textAlign:"center"}}  >Products</p>
        <p style={{textAlign:"center"}}>Title</p>
        <p style={{ textAlign:"center"}}>Price</p>
        <p style={{ textAlign:"center"}}> Quantity</p>
        <p style={{textAlign:"center"}}>Total</p>
        <p style={{textAlign:"center"}}>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0)
         { return (
            <div key={e.id}>
              <div className="cartItem-format cartItems-main">
                <img className="cartItem-image" src={e.image} alt="" />
                <p className="centreCartItem">{e.name}</p>
                <p className="centreCartItem">${e.new_price}</p>
                <button className="cartItem-quantity centreCartItem">{cartItems[e.id]}</button>
                <p className="centreCartItem">${cartItems[e.id] * e.new_price}</p>
                <img className="centreCartItem remove_icon"
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt="Remove Item"
                />
              </div>
              <hr />
            </div>
          );}
          else return null;
      })}
      <div className="cartItems-Total-down">
        <h2>Cart Totals</h2>
        <div >
            <div className="subtotal">
                <h4 >SubTotal</h4>
                <p style={{fontWeight:"600"}}>${getCartAmount()}</p>
            </div>
            <hr />
            <div className="Shipping-fee">
                <h4>Shipping Fee</h4>
                <p style={{fontWeight:"600"}}>Free</p>
            </div>
            <hr />
            <div className="Total-fee">
                <h4>Total</h4>
                <p style={{fontWeight:"600"}}>${getCartAmount()}</p>
            </div>
            <hr />
            <button id="proceed-btn">Proceed To Checkout</button>
        </div>

      </div>

    </div>
  );
};
