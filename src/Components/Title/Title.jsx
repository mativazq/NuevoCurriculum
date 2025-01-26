import React from 'react'
import './title.css'
import miFoto from "../../Images/Cv-2.jpg"; 

const Title = () => {
  return (
    <section className="title">
      <div className="text-container">
        <h1 className="big-title">¡Hola, soy Mati!</h1>
        <p className="subtitle">
          Desarrollador Frontend apasionado por la tecnología.
        </p>
        <button className="open-to-work">OPEN TO WORK</button>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mativazq/" className="social-btn">Linkedin</a>
          <a href="https://github.com/mativazq" className="social-btn">GitHub</a>
          <a href="#contact" className="social-btn">Contáctame</a>
        </div>
      </div>
      <div className="image-container">
        <img src={miFoto} alt="Mi Foto" className="profile-img" />
      </div>
    </section>
  );
};

export default Title;
