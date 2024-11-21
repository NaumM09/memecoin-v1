import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="#about">About the Course</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="social-media">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
