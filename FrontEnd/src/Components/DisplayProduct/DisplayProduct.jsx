import React, { useContext } from "react";
import "./DisplayProduct.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const DisplayProduct = (props) => {
  const {addToCart}=useContext(ShopContext);
  const { product } = props;
console.log("props",props)
  return (
    <>
      <div className="display-product">
        <div className="left-product-box">
          <div className="small-images">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <img id="main-imge" src={product.image} alt="" />
        </div>
        <div className="right-product-details">
          <div>
            <h1>{product.name}</h1>
            <div className="raings-prices">
              <span>
                <img src={star_icon} alt="" />
              </span>
              <span>
                <img src={star_icon} alt="" />
              </span>
              <span>
                <img src={star_icon} alt="" />
              </span>
              <span>
                <img src={star_icon} alt="" />
              </span>
              <span>
                <img src={star_dull_icon} alt="" />
              </span>
              <span id="rating-Number">(122)</span>
              <div className="prices">
                <span id="old-price">${product.old_price}</span>{" "}
                <span id="new-price">${product.new_price}</span>
              </div>
            </div>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, corrupti tempora exercitationem eius debitis, qui
              architecto molestiae porro alias suscipit, dicta fuga eos quidem
              nihil eveniet impedit. Provident, maiores expedita?
            </p>
            <p id="SelectSize">Select Size</p>
            <div className="size-range">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <div className="add-to-cart-buton">
              <button onClick={()=>addToCart(product.id)} type="button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Description-box-nevigator">
        <div className="box-nevigator">
          <div className="Description">Description</div>
          <div className="Description">Reviews (122)</div>
        </div>
        <div className="description-of-website">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          atque in suscipit laudantium officiis, libero dolore corporis
          reprehenderit dolorem quos magnam voluptatem enim tempore facilis ut
          obcaecati dolorum tempora eum.lorem Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis ut nobis eius delectus
          exercitationem aperiam corrupti numquam harum a. Officia architecto
          voluptate nam molestias, odio suscipit praesentium quas odit
          optio.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus in omnis saepe. Fuga accusantium quos libero dolore
          repudiandae, id reprehenderit veritatis similique doloremque eius
          vitae adipisci ab nisi! Nam, praesentium!
        </div>
      </div>
    </>
  );
};
