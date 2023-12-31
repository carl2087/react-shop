import React from "react";
import Button from "../../Forms/Button";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from '../../../redux/Cart/cart.actions'

const Product = (product) => {

  const dispatch = useDispatch();

  const history = useHistory();

  const {
    documentID,
    productThumbnail,
    productName,
    productPrice
  } = product;

  if (!documentID || !productThumbnail || !productName || typeof productPrice === "undefined")
    return null;

  const configAddToCartButton = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch (
      addProduct(product)
    );
    history.push('/cart');
  }

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
              <Button
              {...configAddToCartButton}
              onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
