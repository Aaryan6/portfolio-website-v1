import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="icons">
          <span>
            <a href="https://github.com/Aaryan6" target="_blank">
              <FiGithub className="icon" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/aaryanpatel6/" target="_blank">
              <FiLinkedin className="icon" />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/aaryanpatel2.0/" target="_blank">
              <FiInstagram className="icon" />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/aaryanpatel_06" target="_blank">
              <FiTwitter className="icon" />
            </a>
          </span>
        </div>
        <span className="subtitle">Design by Aaryan Patel.</span>
      </div>
    </div>
  );
};

export default Footer;
