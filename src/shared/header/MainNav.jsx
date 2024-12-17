import React, { useState } from "react";
import "../../styles/nav.css";
import logo from "../../assets/images/homepage/logo.png";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./tour-grid.html">Tours</a>
        </li>
        <li>
          <a href="./destination.html">Destination</a>
        </li>
        <li>
          <a href="./booking.html">Booking</a>
        </li>
        <li>
          <a href="./blog.html">Blog</a>
        </li>
        <li>
          <a href="./contact.html">Contact</a>
        </li>
      </ul>

      <div className="nav_right">
        <button className="contact_btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default MainNav;
