import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [closeBar, setCloseBar] = useState(true);
  useEffect(() => {
    console.log(window.pageYOffset);
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, [scrollPosition]);

  return (
    <div className="nav-container">
      <div className={scrollPosition > 600 ? "wrapper-change" : "wrapper"}>
        <img src="da-logo.svg" alt="logo" className="logo" />
        <Icon
          icon="circum:menu-fries"
          className="menu-icon"
          onClick={() => setCloseBar(!closeBar)}
        />
        <div className={closeBar ? "list" : "list change-list"}>
          <a href="#" onClick={() => setCloseBar(true)}>
            Home
          </a>
          <a href="#about" onClick={() => setCloseBar(true)}>
            About
          </a>
          <a href="#projects" onClick={() => setCloseBar(true)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setCloseBar(true)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
