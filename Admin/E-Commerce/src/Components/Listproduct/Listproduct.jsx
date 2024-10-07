import React, { useEffect, useState } from "react";
import "./Listproduct.css";
import cross_icon from "../../assets/cross_icon.png"
export const Listproduct = () => {
  const [allPoduct, setallProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts",{
      method:"GET"
    })
      .then((res) => res.json())
      .then((data) => setallProducts(data));
  };
 
   const removeDataHandler=async (id)=>{
    console.log(id)
         await  fetch(`http://localhost:3000/removeproduct/${id}`,{
          method:"DELETE",
          headers:{
            accept:"Application/Json"
          }
         })
         
        await fetchInfo();
   }
  
  //   // MEANS WHENEVER THIS COMPONENT IS MOUNTED THIS FETCHiNO FUN RUNS AT ONEC
  useEffect(() => {
    fetchInfo();
  }, []);
  console.log(allPoduct);
  return (
    <div className="admin-list-product">
      <h1>All Product List</h1>
      <div className="admin-product-list-main">
        <p>Image</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allPoduct">
        <hr />
        {allPoduct.map((product,index) => {
          
      
         return <div>
          <div key={index} className="admin-product-list-main">
            <img className="admin-productList-image" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
           <p> <img className="admin-productLit-move-icon" src={cross_icon} alt=""  onClick={()=>{removeDataHandler(product.id)}}/></p>
           
          </div>
          <hr />
         </div>
        })}
      </div>
    </div>
  );
};
