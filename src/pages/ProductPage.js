import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

// Sample product data
const sampleProducts = [
  {
    _id: '1',
    name: 'Indoor Air Quality Monitor',
    description: 'Monitor and track indoor air quality with real-time data. Equipped with sensors for PM2.5, CO2, VOCs, and temperature, helping you maintain a healthy environment.',
    price: 55,
    originalPrice: 58,
  },
  {
    _id: '2',
    name: 'Outdoor Air Quality Monitor',
    description: 'A rugged and weather-resistant air quality monitor designed for outdoor use. Measures pollutants like PM2.5, PM10, and ozone, providing critical environmental data.',
    price: 65,
    originalPrice: 69,
  },
  {
    _id: '3',
    name: 'Air Purifier',
    description: 'Advanced air purifier with HEPA filtration, designed to remove airborne particles, allergens, and pollutants. Ideal for homes, offices, or any indoor environment.',
    price: 99,
    originalPrice: 100,
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
