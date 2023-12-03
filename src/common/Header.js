import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import { BsCake2Fill } from "react-icons/bs";
import "./header.css";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      {/* Logo Part */}
      <div className="logo">
        <h2>
          <span>K</span>ay <span>B</span>akes
          <BsCake2Fill />
        </h2>
      </div>
      {/* Menu Part */}
      <div   className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Services
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
        </ul>
      </div>
      {/* 3rd Social Media Links */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a href="#" target="">
              <FaFacebookSquare style={{color:'#316FF6'}} />{" "}
            </a>
          </li>
          <li>
            <a href="#" target="">
              <FaInstagramSquare className="instagram" />{" "}
            </a>
          </li>
          <li>
            <a href="#" target="">
              <FaYoutubeSquare className="youtube" />{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
