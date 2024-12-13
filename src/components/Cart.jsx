import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart); /* state variable to obesrve the change in cart */
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(removeFromCart(item)); /* remove option dispatching if quantity of items in cart is greater than 1 */
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item, true));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item)}>-</button> {/* Decrease button to decrease the quntity of item in cart */}
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button> {/* Increase button to increase the quntity of item in cart */}
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3> {/* calculate the total amount of the added items */}
        <button
          className="clear-cart-btn"
          onClick={() => dispatch(clearCart())} 
        >
          Clear Cart
        </button> {/* EventListener for button clear cart to clear the entire cart */}
        <button className="continue-btn">
          <Link to="/" className="continue-link">Continue Shopping</Link> {/* continue shopping button routed to home page  */}
        </button>
      </div>
    </div>
  );
};

export default Cart;
