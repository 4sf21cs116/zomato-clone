import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Restuarant.css';
import { AuthContext } from './AuthContext';
const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { loggedInUser} = useContext(AuthContext);
  useEffect(() => {
    axios.get('http://localhost:5000/api/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
   <div className="restaurant-section">
  <h2>Browse Restaurants</h2>
  <div className="restaurant-grid">
    {restaurants.map((rest) => (
      <div className="restaurant-card" key={rest._id}>
        <img src={rest.image} alt={rest.name} />
        <h3>{rest.name}</h3>
        <p>{rest.cuisine}</p>
        <p>{rest.address}</p>
       <Link
  to={loggedInUser ? `/restaurants/${rest._id}` : "/login"}
  onClick={() => {
    if (!loggedInUser) {
      alert("Please login to browse the restaurant");
    }
  }}
>
  View Menu
</Link>

      </div>
    ))}
  </div>
</div>

  );
};

export default Restaurant;
