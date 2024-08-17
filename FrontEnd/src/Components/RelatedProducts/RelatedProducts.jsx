import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";
import "./RelatedProducts.css";
export const RelatedProducts = () => {
  const RelatedproductsArray = data_product.map((DtataItems) => {
    return (
      <Items
        id={DtataItems.id}
        name={DtataItems.name}
        image={DtataItems.image}
        new_price={DtataItems.new_price}
        old_price={DtataItems.old_price}
      />
    );
  });
  return (
    <div className="ReletedProducts">
      <h1>RELATED PRODUCTS</h1><hr />
     <div className="products-flex">
     <div className="products">{RelatedproductsArray}</div>
     </div>
    </div>
  );
};
