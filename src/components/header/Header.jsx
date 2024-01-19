


import React from "react";
import "./header.css";

import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header>
    
     
      <div className="hero-image">
        <div className="hero-text">
          <h5>Hello, I am</h5>
          <h1>
            <span>R</span>
            <span>i</span>
            <span>y</span>
            <span>a</span>
            <span className="space-between">
              <span>
                <span>    G</span>
              </span>
              <span>
                <span>o</span>
              </span>
              <span>y</span>
              <span>a</span>
              <span>l</span>
            </span>
          </h1>
        </div>
      </div>

      <HeaderSocials />
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
