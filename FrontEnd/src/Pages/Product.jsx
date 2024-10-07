import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrum/BreadCrum';
import { DisplayProduct } from '../Components/DisplayProduct/DisplayProduct';

import "./CSS/Product.css"
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> Number(e.id)===Number(productId))

  return (
    <div className='Product-detals'>
      <BreadCrum product={product}/>
      <DisplayProduct product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
