import React from "react";
import "../../styles/footer.css"; 
import logo from "../../assets/images/logo.webp"; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <img src={logo} alt="Travello Logo" />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt
            <br />
            ut labore et dolore magna <br />
            aliqua.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fa fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://skype.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Skype"
            >
              <i className="fa fa-brands fa-skype"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section company">
          <h3>COMPANY:</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog update</a>
            </li>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>QUICK LINKS:</h3>
          <ul>
            <li>
              <a href="#">Privacy & policy</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Hydropower Plants</a>
            </li>
            <li>
              <a href="#">Customer support</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>SUBSCRIBE NEWSLETTER:</h3>
          <form>
            <input type="email" placeholder="Enter Your Email:" required />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          Copyright © 2024 <span className="highlight">Travello</span> All Right
          Reserved
        </p>
        <p>
          <a href="#">Privacy & Policy</a> || <a href="#">Terms & Conditions</a>
        </p>
      </div>

      {/* Scroll Up */}
      <div className="scroll-up">
        <a href="#top" aria-label="Scroll to Top">
          <span>⬆</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
