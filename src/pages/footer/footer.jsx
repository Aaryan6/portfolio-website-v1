import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="icons">
          <span>
            <FiGithub className="icon" />
          </span>
          <span>
            <FiLinkedin className="icon" />
          </span>
          <span>
            <FiInstagram className="icon" />
          </span>
          <span>
            <FiTwitter className="icon" />
          </span>
        </div>
        <span className="subtitle">Design by Aaryan Patel.</span>
      </div>
    </div>
  );
};

export default Footer;
