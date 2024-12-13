import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../store/searchSlice";
import "../styles/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <Link to="/" className="logo_image">
        <img
          src="/src/Utils/icon_image.jpg"
          alt="ShoppyGlobe"
          className="logo-image"
        />
      </Link>
      <Link to="/" className="logo">Home</Link>

      <nav> {/* adding cart icon to the nav bar */}
        <Link to="/cart" className="cart-icon">
          🛒
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
