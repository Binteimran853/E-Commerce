import React, { useState } from "react";
import upload_area_icon from "../../assets/upload_cloud_icon.svg";
import "./addproduct.css";
export const Addproduct = () => {
  const [image, setimage] = useState("");
  const [productDetails, setproductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
    image: "",
  });
  function handlerImage(e) {
    setimage(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  function handlerProductDetails(e) {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }
    // WHEN ADD BUTTON IS CLICKED 
  const addPoductDetails = async () => {
    console.log(productDetails);
    let product = productDetails;
    let response;
    let formData = new FormData();
    formData.append("product", image);

    response=await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    })
      response=await response.json();

    if (response.success) {
      product.image = response.image_url;
      productDetails.image = product.image;
      console.log(product);
     let responseOnAddProduct= await fetch("http://localhost:3000/addproduct", {
        method: "POST",
        headers: {
          accept: "application/json",
          'content-type':"application/json"
        },
        body: JSON.stringify(product),
      })
      responseOnAddProduct=await responseOnAddProduct.json();
      // console.log(responseOnAddProduct)
     responseOnAddProduct.Success?alert("Product added"):alert("Poduct is not added")
        
    }
    else console.log("ERROR")
  };
  return (
    <div className="addpoduct">
      <p>Product Title</p>
      <input
        type="text"
        value={productDetails.name}
        name="name"
        onChange={handlerProductDetails}
      />
      <p>price</p>
      <input
        type="text"
        value={productDetails.old_price}
        name="old_price"
        onChange={handlerProductDetails}
      />
      <p>Offer Price</p>
      <input
        type="text"
        value={productDetails.new_price}
        name="new_price"
        onChange={handlerProductDetails}
      />
      <div className="addproduct-categoryfiled">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={handlerProductDetails}
        >
          <option value="men">Men</option>
          <option value="kid">Kids</option>
          <option value="women">Women</option>
        </select>
      </div>
      <div className="addproduct-itemField">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area_icon}
            className="addproduct-thumbnail"
            alt="upload-icon"
          />
        </label>
        <input
          type="file"
          onChange={handlerImage}
          name="file-name"
          id="file-input"
          hidden
        />
      </div>
      <div className="addpoduct-btn">
        <button onClick={addPoductDetails}>Add</button>
      </div>
    </div>
  );
};
