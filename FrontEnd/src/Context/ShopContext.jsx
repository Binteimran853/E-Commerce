import React, { createContext, useState } from "react";
import all_products from "../Components/assets/all_product"
export const ShopContext = createContext(null);

// TO INITIALIZE 0 FOR EACH ITEM IN CART AS OUR CART IS EMPTY
const getDefaultCart = () => {
    let cart = [];
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItems);
    }

    // NOW WE  ACCESS THESE IN ANY COMPONENT
    const ContextValue = { all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;