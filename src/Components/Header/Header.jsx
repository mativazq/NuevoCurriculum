import React from 'react'
import './header.css'
import logo from "../../Images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt='logo' className='logo-img'  />
      </div>
      <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li><a href="#aboutMe">Un poco sobre mi</a></li>
          <li><a href="#study">Estudios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
