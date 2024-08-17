import React from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignUp from "./Pages/LoginSignUp"
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/assets/banner_mens.png"
import women_banner from "./Components/assets/banner_women.png"
import kids_banner from "./Components/assets/banner_kids.png"
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        < Routes>
          {/* in Route path and Link of in Navbar that have to='' must be same   */}
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} >
          {/* <Route path="/productId" element={<Product />} /> */}
          
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
