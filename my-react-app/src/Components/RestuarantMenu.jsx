import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RestuarantMenu.css';
import { CartContext } from './CartContext';

const RestuarantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  const { cart, handleAddToCart, handleQuantityChange } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => {
        setMenu(res.data.menu);
        setRestaurant(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const getFilteredMenu = () => {
    let updatedMenu = [...menu];
    if (searchTerm) {
      updatedMenu = updatedMenu.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortOrder === 'low') {
      updatedMenu.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      updatedMenu.sort((a, b) => b.price - a.price);
    }
    return updatedMenu;
  };

  const totalAmount = Object.values(cart).reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="menu-container">
      <div
        id="bannerimg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${restaurant.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
          borderBottomLeftRadius: '100px',
          borderBottomRightRadius: '100px',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '4rem',
            textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
            fontWeight: 'bold', 
          }}
        >
          {restaurant.name}
        </h1>
      </div>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search menu"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select onChange={(e) => setSortOrder(e.target.value)} className="price-filter">
          <option value="default">Filter</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {getFilteredMenu().map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.imageUrl} alt={item.name} />
          <h4>{item.name} - ₹{item.price}</h4>
          <p>{item.description}</p>

          {cart[item._id] ? (
            <div className="quantity-control">
              <button className="menu-qty-btn" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
              <span>{cart[item._id].quantity}</span>
              <button className="menu-qty-btn" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
              <p className="item-total">Total: ₹{cart[item._id].total}</p>
            </div>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart({ ...item, restaurantName: restaurant.name })} 
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}

      {totalAmount > 0 && (
        <div className="menu-cart-summary">
          <h3>Your Total Amount: ₹{totalAmount}</h3>
          <p>View cart page for more details</p>
        </div>
      )}
    </div>
  );
};

export default RestuarantMenu;
