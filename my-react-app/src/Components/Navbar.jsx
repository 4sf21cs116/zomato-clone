import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from './CartContext';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { loggedInUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <h2 id="logo">ZomatoLite</h2>
      <div id="nav-links">
        <Link to="/cart">
          Cart <span className="cart-badge">{cartCount}</span>
        </Link>

        {!loggedInUser ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <span className="user-info">Hi {loggedInUser.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
