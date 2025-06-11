import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-intro">
          <h2>🍴 Explore More, Eat Better</h2>
          <p>
            Discover a world of flavors with leading food delivery partners like <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>, <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>, and more. Whether you're craving street food or gourmet dishes, these platforms bring your favorites to your doorstep in minutes.
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Top Delivery Platforms</h4>
            <ul>
              <li><a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a></li>
              <li><a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a></li>
              <li><a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">Uber Eats</a></li>
              <li><a href="https://www.eatsure.com" target="_blank" rel="noopener noreferrer">EatSure</a></li>
            </ul>
          </div>
          <div>
            <h4>Restaurant Booking</h4>
            <ul>
              <li><a href="https://www.dineout.co.in" target="_blank" rel="noopener noreferrer">Dineout</a></li>
              <li><a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">OpenTable</a></li>
              <li><a href="https://www.tablein.com" target="_blank" rel="noopener noreferrer">Tablein</a></li>
            </ul>
          </div>
          <div>
            <h4>Other Food Services</h4>
            <ul>
              <li><a href="https://www.foodpanda.com" target="_blank" rel="noopener noreferrer">FoodPanda</a></li>
              <li><a href="https://www.behrouzbiryani.com" target="_blank" rel="noopener noreferrer">Behrouz Biryani</a></li>
              <li><a href="https://www.faasos.com" target="_blank" rel="noopener noreferrer">Faasos</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect with Me</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/priyanshu-poojary" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/priyanshu-poojary" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://instagram.com/priyanshu.poojary" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZomatoLite by Priyanshu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
