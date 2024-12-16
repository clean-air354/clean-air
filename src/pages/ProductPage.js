import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

// Sample product data
const sampleProducts = [
  {
    _id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    originalPrice: 129.99,
  },
  {
    _id: '2',
    name: 'Smartwatch',
    description: 'Fitness tracking smartwatch with heart rate monitor.',
    price: 149.99,
    originalPrice: 199.99,
  },
  {
    _id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass.',
    price: 49.99,
    originalPrice: 59.99,
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [loading, setLoading] = useState(false); // No API loading
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulate authentication check
  const token = localStorage.getItem('authToken');
  if (!token) {
    navigate('/login'); // Redirect to login if no token found
  }

  // No API request, products are directly set from sampleProducts
  if (!products.length) {
    setError('No products found.');
  }

  // Handle loading and error states
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
