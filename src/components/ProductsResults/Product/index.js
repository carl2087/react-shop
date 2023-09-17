import React from "react";
import Button from "../../Forms/Button";
import { NavLink } from "react-router-dom";

const Product = ({
	documentID,
	productThumbnail,
	productName,
	productPrice
}) => {
  if (!documentID || !productThumbnail || !productName || typeof productPrice === "undefined")
    return null;

  const configAddToCartButton = {
    type: "button",
  };

  return (
    <div className="product">
      <div className="thumb">
				<NavLink to={`/product/${documentID}`}>
        <img src={productThumbnail} alt={productName} />
				</NavLink>
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="name">
							<NavLink to={`/product/${documentID}`}>
								{productName}
							</NavLink>
						</span>
          </li>
          <li>
            <span className="price">£{productPrice}</span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartButton}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
