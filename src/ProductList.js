import React, { useState } from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://picsum.photos/id/1/300/200", category: "Electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, image: "https://picsum.photos/id/20/300/200", category: "Clothing" },
  { id: 3, name: "Running Shoes", price: 59.99, image: "https://picsum.photos/id/30/300/200", category: "Footwear" },
  { id: 4, name: "Coffee Maker", price: 45.00, image: "https://picsum.photos/id/42/300/200", category: "Kitchen" }
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} loading="lazy" />
          <h3>{product.name}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <span className="category">{product.category}</span>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;