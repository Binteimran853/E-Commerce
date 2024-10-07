import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);

// TO INITIALIZE 0 FOR EACH ITEM IN CART AS OUR CART IS EMPTY
const getDefaultCart = () => {
    let cart = [];
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
const [all_product,set_all_product]=useState([]) 
    const [cartItems, setCartItems] = useState(getDefaultCart());

useEffect(()=>{
  
        const fetchData=async()=>{
            let response= await  fetch('http://localhost:3000/allproducts',{
                method:'GET',
                headers:{
                    accept:"application/json"
                }
            });
          response=await response.json();
        set_all_product(response)
        }
        fetchData();
},[])

  
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        const addToCart = (itemId) => {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            if (localStorage.getItem("auth-token")) {
              fetch("http://localhost:3000/addToCart", {
                method: "POST",
                headers: {
                  accept: "application/json",
                  "auth-token": `${localStorage.getItem("auth-token")}`,
                  "content-type": "application/json",
                },
                body: JSON.stringify({ "itemId": itemId }), //As we ae sending data in body in json formate
              })
                .then((res) => res.json())
                .then((data) => console.log("data", data));
            }
          };
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItems);
    }

    const getCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    TotalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return TotalAmount;
    };
    
const cartCount=()=>{
    let totalCount=0;
    for( const item in cartItems){
        if(cartItems[item]>0)
          {
            totalCount+=cartItems[item];
          }
    }
    return totalCount;
}
    // NOW WE  ACCESS THESE IN ANY COMPONENT
    const ContextValue = { all_product, cartItems, addToCart, removeFromCart,getCartAmount,cartCount };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    
}
export default ShopContextProvider;