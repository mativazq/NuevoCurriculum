import React from 'react'
import './aboutMe.css'
import fotoAbout from "../../Images/Sin título-1.png";
import curriculum from "../cv_vazquez_matias.pdf"


const AboutMe = () => {
  return (
    <section id='aboutMe' className="about-me">
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Mati, soy de Santa Fe Capital y estoy en busqueda laboral. Soy fotografo profesional
          y suelo manejar programas de edición como Lightroom y Photoshop.
        </p>
        <p>
          Soy desarrollador Frontend hace un año y en este corto tiempo tuve el gusto de trabajar en distintos proyectos
          propios buscando siempre el aprendizaje y el avance en las distintas tecnologias. Actualmente me encuentro a punto
          de iniciar la carrera de Diseño Multimedia y Web en la Universidad Nacional del Litoral en modalidad virtual.
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
