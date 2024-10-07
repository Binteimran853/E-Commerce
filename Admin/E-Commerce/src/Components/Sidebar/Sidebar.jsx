import React from "react";
import "./Sidebar.css";
import add_product_icon from "../../assets/Product_Cart.svg";
import product_list_icon from "../../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="admin-sidebar"> 
      <Link
        to={"/addproduct"}
        style={{ textDecoration: "none", color: "grey" }}
      >
        <div className="admin-sidebar-product">
          <h5>Add Product</h5>
          <img src={add_product_icon} alt="" />
        </div>
      </Link>
      <Link to={"/listproduct"} style={{textDecoration:"none",color:"grey" }}>
      <div className="admin-sidebar-product">
          <h5>List Product</h5>
          <img src={product_list_icon} alt="" />
        </div>
      </Link>
    </div>
  );
};
