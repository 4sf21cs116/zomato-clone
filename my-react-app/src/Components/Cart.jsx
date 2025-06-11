import React, { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import axios from 'axios';
import {AuthContext} from './AuthContext';


const Cart = () => {
  const { cart, handleQuantityChange, clearCart } = useContext(CartContext);
  const {loggedInUser}=useContext(AuthContext);
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [username, setUsername] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      username:loggedInUser.name,
      items: cartItems.map(({ item, quantity, total }) => ({
        name: item.name,
        price: item.price,
        quantity,
        total,
        restaurantName: item.restaurantName || 'Unknown', 
      })),
      totalAmount,
      paymentMethod,
      location,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:5000/api/orders', orderData);
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {orderPlaced ? (
        <div className="order-success-message">
          <h2>🎉 Order Placed Successfully!</h2>
          <p>Thank you for ordering. Your delicious food is on the way!</p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(({ item, quantity, total }) => (
              <div key={item._id} className="cart-item">
                <img className="cart-item-img" src={item.imageUrl} alt={item.name} />
                <div className="cart-details">
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p style={{ fontStyle: 'italic', color: '#777' }}>
                      {item.restaurantName || 'Restaurant'}
                    </p>
                  </div>
                  <div className="cart-controls">
                    <div className="quantity">
                      <button className="cart-qty-btn" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                      <span>{quantity}</span>
                      <button className="cart-qty-btn" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                    </div>
                    <p className="item-total">Total: ₹{total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-cart-summary">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>

          <form className="order-form" onSubmit={handleSubmitOrder}>
            <h3>Enter Delivery & Payment Details</h3>
            <input
              type="text"
              placeholder="Enter delivery location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="COD">Cash on Delivery (COD)</option>
              <option value="Online Payment">Online Payment</option>
            </select>

            <button type="submit" className="submit-order-btn">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
