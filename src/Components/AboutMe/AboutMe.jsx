import React from 'react'
import './aboutMe.css'
import fotoAbout from "../../Images/FotoCv-17.png";


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Mati, desarrollador Frontend apasionado por la tecnología.
          Actualmente, estoy en búsqueda de nuevas oportunidades para seguir
          creciendo y aportando mis conocimientos.
        </p>
        <p>
          Me especializo en tecnologías como React.js, JavaScript, HTML y CSS.
          Me encanta aprender nuevas herramientas y enfrentar desafíos en el
          mundo del desarrollo web.
        </p>
        <div className="about-buttons">
          <a href="/cv.pdf" className="button" download>
            📄 Curriculum Vitae
          </a>
          <a href="mailto:correo@example.com" className="button">
            ✉️ Email
          </a>
        </div>
      </div>
      <div className="about-image">
        <img src={fotoAbout} alt="Foto de perfil" />
      </div>
    </section>
  );
};

export default AboutMe;
