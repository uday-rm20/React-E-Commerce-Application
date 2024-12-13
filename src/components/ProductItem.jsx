import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const { id, title, price, thumbnail } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); /* dispatching action */
  };

  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* eventlistener for add to cart button to add products to cart */}
    </div>
  );
};

export default ProductItem;
