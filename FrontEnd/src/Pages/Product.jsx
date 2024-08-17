import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrum/BreadCrum';
import { DisplayProduct } from '../Components/DisplayProduct/DisplayProduct';
// import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"
import "./CSS/Product.css"
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id===Number(productId))

  return (
    <div className='Product-detals'>
      <BreadCrum product={product}/>
      <DisplayProduct product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
