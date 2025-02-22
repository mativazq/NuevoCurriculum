import React from "react";
import "./header.css";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo-img" />
        <nav>
          <ul className="nav-links">
            <li><a href="#study">Estudios</a></li>
            <li><a href="#aboutMe">Un poco sobre mí</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
