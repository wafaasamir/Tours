import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/homepage/logo.png";
import { Link, useNavigate } from "react-router-dom";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contact`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Travello Logo" className="logo-img" />
      </div>

      <div
        id="hamburger"
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav_links ${isMenuOpen ? "nav_links--open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/destinations">Destination</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav_right">
        <button className="contact_btn" onClick={handleClick}>Contact Us</button>
      </div>
    </nav>
  );
};

export default MainNav;
