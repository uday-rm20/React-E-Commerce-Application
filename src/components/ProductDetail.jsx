import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message)); /* error handling  */
  }, [id]); /* using fetch to collect dummy data of products */

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;  /* displaying loading until the data is fetched */
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price} USD</p>
    </div>
  );
};

export default ProductDetail;
