import React from 'react'
import './aboutMe.css'
import fotoAbout from "../../Images/Sin título-1.png";
import curriculum from "../cv_vazquez_matias.pdf"


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Mati, desarrollador Frontend apasionado por la tecnología y Fotografo profesional.
          Actualmente, estoy en búsqueda de nuevas oportunidades para seguir
          creciendo y aportando mis conocimientos.
        </p>
        <p>
          Me especializo en tecnologías como React.js, JavaScript, HTML y CSS asi tambien Python y Django.
          Me encanta aprender nuevas herramientas y enfrentar desafíos en el
          mundo del desarrollo web.
        </p>
        <div className="about-buttons">
          <a href= {curriculum} className="button" download>
            📄 Curriculum Vitae
          </a>
          <a href="mailto:matyv15@gmail.com" className="button">
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
