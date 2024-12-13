import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(""); 

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  /* filter products by the value entered in the search bar */
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div className="product-list">
      
      
      {/* search bar to search the desired product */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h2>Product List</h2>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
