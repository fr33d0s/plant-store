import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plants = [
    // Air Purifying Plants
    {
      id: 1,
      name: 'Snake Plant',
      price: 29.99,
      category: 'Air Purifying',
      image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Low maintenance, air purifying plant'
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 34.99,
      category: 'Air Purifying',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Beautiful white flowers, excellent air purifier'
    },
    // Foliage Plants
    {
      id: 3,
      name: 'Monstera Deliciosa',
      price: 49.99,
      category: 'Foliage',
      image: 'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stunning split leaves, Instagram favorite'
    },
    {
      id: 4,
      name: 'Rubber Plant',
      price: 39.99,
      category: 'Foliage',
      image: 'https://images.unsplash.com/photo-1604516285617-a69bc954c8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Glossy green leaves, very decorative'
    },
    // Succulent Plants
    {
      id: 5,
      name: 'Jade Plant',
      price: 19.99,
      category: 'Succulent',
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af70e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Easy care succulent, brings good luck'
    },
    {
      id: 6,
      name: 'Aloe Vera',
      price: 24.99,
      category: 'Succulent',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Medicinal properties, drought tolerant'
    }
  ];

  const categories = ['Air Purifying', 'Foliage', 'Succulent'];

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <div className="container">
        <h1 className="page-title">Our Beautiful Plants</h1>
        
        {categories.map(category => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category} Plants</h2>
            <div className="plants-grid">
              {plants.filter(plant => plant.category === category).map(plant => (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image">
                    <img src={plant.image} alt={plant.name} />
                  </div>
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-price">${plant.price}</div>
                    <button 
                      className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;