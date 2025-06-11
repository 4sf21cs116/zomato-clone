import React from 'react';
import './Home.css';
import Restaurant from './Restaurant';
import Footer from './Footer';

const favorites = [
  {
    name: "Cheeseburger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
  },
  {
    name: "Pasta Alfredo",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
  },
  {
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
  },
  {
    name: "Veg Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];


const Home = () => {
  return (
    <div>
      <div id="banner">
        <h1 id="banner-text"> Priyanshu Food Ordering</h1>
      </div>

      <div className="favorites-section">
        <h2 className="favorites-heading">Your Favorite Dishes</h2>
        <div className="favorites-grid">
          {favorites.map((dish, index) => (
            <div className="favorite-card" key={index}>
              <img src={dish.image} alt={dish.name} className="favorite-img" />
              <p className="favorite-name">{dish.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Restaurant />
      <Footer/>
    </div>
  );
};

export default Home;
