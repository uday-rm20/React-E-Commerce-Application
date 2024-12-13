import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import '../styles/CartItem.css';


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>{item.price} USD</p>
      <button onClick={handleRemove}>Remove</button> 
    </div>
  );
};

export default CartItem;
