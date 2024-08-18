import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import "./CartItem.css"
export const CartItem = () => {
  const { all_products, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="Cart-items">
      <div className="cartItems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0)
          return (
            <div key={e.id}>
              <div className="cartItem-format">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItem-quantity">{cartItems[e.id]}</button>
                <p>{cartItems[e.id] * e.new_price}</p>
                <img
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt="Remove Item"
                />
              </div>
              <hr />
            </div>
          );
      })}
    </div>
  );
};
