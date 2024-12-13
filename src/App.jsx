import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}> {/* Lazing Loading  */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense> {/* it prints laoding until my lazy loading completes */}
      {/* lzy loading is used to load only required components in order to optimize the application */}
    </div>
  );
};

export default App;
